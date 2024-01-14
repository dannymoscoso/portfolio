data "aws_iam_policy_document" "bucket_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]

    effect = "Allow"

    resources = [
      aws_s3_bucket.frontend.arn,
      "${aws_s3_bucket.frontend.arn}/*"
    ]

    # principals {
    #   type        = "Service"
    #   identifiers = ["*"]
    # }

    # condition {
    #   test     = "StringEquals"
    #   variable = "AWS:SourceArn"

    #   values = [
    #     "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${aws_cloudfront_distribution.s3.id}"
    #   ]
    # }


  }
}


resource "aws_s3_bucket_policy" "my_bucket_policy" {
  bucket = aws_s3_bucket.frontend.id
  policy = data.aws_iam_policy_document.bucket_policy.json
}






resource "aws_s3_bucket" "frontend" {
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}


resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }

}


resource "aws_s3_bucket_ownership_controls" "frontend" {
  bucket = aws_s3_bucket.frontend.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "frontend" {
  depends_on = [
    aws_s3_bucket_ownership_controls.frontend,
    aws_s3_bucket_public_access_block.frontend,
  ]

  bucket = aws_s3_bucket.frontend.id
  acl    = "public-read"
}


module "frontend" {
  source   = "hashicorp/dir/template"
  base_dir = "../frontend/public"
}

resource "aws_s3_bucket_object" "static_files" {
  for_each = module.frontend.files

  bucket       = aws_s3_bucket.frontend.id
  key          = each.key
  content_type = each.value.content_type

  source  = each.value.source_path
  content = each.value.content

  etag = each.value.digests.md5
}

data "aws_region" "current" {}


resource "aws_cloudfront_origin_access_control" "s3" {
  name                              = var.app_name
  description                       = "terraform controlled "
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_origin_access_identity" "frontend" {
  comment = "terraform controlled"
}



resource "aws_cloudfront_distribution" "s3" {
  provider = aws.at_edge


  origin {
    connection_attempts = 3
    connection_timeout  = 10
    domain_name         = "${aws_s3_bucket.frontend.id}.s3-website.${data.aws_region.current.name}.amazonaws.com"
    origin_id           = var.app_name

    custom_origin_config {
      origin_protocol_policy   = "http-only"
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["TLSv1.2"]
    }

  }

  enabled             = true
  is_ipv6_enabled     = false
  comment             = "Managed by Terraform"
  default_root_object = "index.html"

  aliases = [local.frontend_url, "www.${local.frontend_url}"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.app_name

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    viewer_protocol_policy = "redirect-to-https"

  }

  # price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # viewer_certificate {
  #   cloudfront_default_certificate = true
  # }


  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.frontend_cert.arn
    cloudfront_default_certificate = false
    ssl_support_method             = "sni-only"
  }


}

