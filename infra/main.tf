terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.59"
    }
  }

  # required_version = ">= 1.2.0"

}

provider "aws" {
  region = "ca-central-1"
}

provider "aws" {
  alias  = "at_edge"
  region = "us-east-1"
}

data "aws_caller_identity" "current" {}


locals {
  frontend_url = var.domain
}

data "aws_route53_zone" "domain" {

  name         = "${var.domain}."
  private_zone = false
}



resource "aws_route53_record" "frontend" {

  name    = local.frontend_url
  zone_id = data.aws_route53_zone.domain.zone_id
  type    = "A"


  alias {
    name                   = aws_cloudfront_distribution.s3.domain_name
    zone_id                = aws_cloudfront_distribution.s3.hosted_zone_id
    evaluate_target_health = true
  }

  depends_on = [data.aws_route53_zone.domain, aws_s3_bucket.frontend]
}


resource "aws_route53_record" "frontend_www" {

  name    = "www.${local.frontend_url}"
  zone_id = data.aws_route53_zone.domain.zone_id
  type    = "A"


  alias {
    name                   = aws_cloudfront_distribution.s3.domain_name
    zone_id                = aws_cloudfront_distribution.s3.hosted_zone_id
    evaluate_target_health = true
  }

  depends_on = [data.aws_route53_zone.domain, aws_s3_bucket.frontend]
}

