# Create a Resource Group
resource "azurerm_resource_group" "rg-astabm-www" {
  name     = "astabm-www"
  location = "westeurope"
}

# Create the Static Webapp
resource "azurerm_static_site" "ss-astabm-www" {
  name                = "astabm-www"
  resource_group_name = azurerm_resource_group.rg-astabm-www.name
  location            = "West Europe"
}

# Create a custom domain in the Static Webapp
resource "azurerm_static_site_custom_domain" "cd-www-astabm-dk" {
  static_site_id  = azurerm_static_site.ss-astabm-www.id
  domain_name     = "www.astabm.dk"
  validation_type = "dns-txt-token"
}

# Create a TXT record to verify the custom domain in Cloudflare
resource "cloudflare_record" "cf-txt-www-astabm-www" {
  zone_id = var.cloudflare_zone_id
  name    = "www.astabm.dk"
  value   = azurerm_static_site_custom_domain.cd-www-astabm-dk.validation_token
  type    = "TXT"
  ttl     = 1
}

# Create the CNAME record for the domain that will point to the webapp default hostname
resource "cloudflare_record" "cf-cname-www-mikkastabm-www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = azurerm_static_site.ss-astabm-www.default_host_name
  type    = "CNAME"
  ttl     = 1
}