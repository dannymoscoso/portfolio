resource "aws_acm_certificate" "frontend_cert" {
  provider = aws.at_edge

  domain_name               = local.frontend_url
  subject_alternative_names = ["www.${local.frontend_url}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}


resource "aws_route53_record" "frontend_cert" {
  provider = aws.at_edge

  for_each = {
    for dvo in aws_acm_certificate.frontend_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.domain.zone_id
}


resource "aws_acm_certificate_validation" "frontend_cert" {
  provider = aws.at_edge

  certificate_arn         = aws_acm_certificate.frontend_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.frontend_cert : record.fqdn]
}