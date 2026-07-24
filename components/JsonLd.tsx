export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nexuscoreit.com/',
    name: 'Nexus Core',
    image: 'https://www.nexuscoreit.com/logo.png',
    description: 'IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC.',
    url: 'https://www.nexuscoreit.com/',
    telephone: '+91-XXXXXXXXXX',
    email: 'support@nexuscoreit.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560034',
      addressCountry: 'IN',
    },
    areaServed: ['IN', 'SG', 'MY'],
    serviceType: ['IT Support', 'WiFi Site Surveys', 'Managed IT Services', 'Data Center Support'],
    priceRange: '$$',
    sameAs: [
      'https://www.linkedin.com/company/nexus-core',
      'https://www.facebook.com/nexus-core',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
