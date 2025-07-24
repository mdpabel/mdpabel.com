export interface Service {
  title: string;
  price: number;
  description: string;
  slug: string;
  featured?: boolean;
}

export const allServices: Service[] = [
  {
    title: 'WordPress Malware Removal',
    price: 150,
    description:
      'Complete malware removal and security hardening for your WordPress site. We ensure your site is clean, secure, removed from blacklists, and protected from future attacks.',
    slug: 'wordpress-malware-removal',
    featured: true,
  },
  {
    title: 'Google Safe browsing blacklist removal',
    price: 150,
    description:
      "Remove your site from Google's blacklist and restore visibility.",
    slug: 'google-safe-browsing-blacklist-removal',
    featured: true,
  },
  {
    title: 'Next.js Fullstack Website',
    price: 850,
    description:
      'Custom-built fullstack web application using Next.js, Node.js, and a database of your choice. Optimized for performance, SEO, and scalability with authentication, dashboard, and API integration.',
    slug: 'nextjs-fullstack-website',
    featured: true,
  },
  {
    title: 'WordPress Website Design & Development',
    price: 350,
    description:
      'Professional WordPress website tailored to your business needs. Includes theme customization, essential plugins, responsive design, speed optimization, and security setup.',
    slug: 'wordpress-website-development',
    featured: true,
  },
  {
    title: 'Fix http 500 internal server error',
    price: 80,
    description: 'Diagnose and resolve server-side errors quickly.',
    slug: 'fix-http-500-internal-server-error',
  },
  {
    title: 'Fix http 403 forbidden error',
    price: 70,
    description: 'Correct permission issues preventing access to your site.',
    slug: 'fix-http-403-forbidden-error',
  },
  {
    title: 'Fatal error resolution',
    price: 100,
    description: 'Fix critical PHP or script errors causing site crashes.',
    slug: 'fatal-error-resolution',
  },
  {
    title: 'SSL installation',
    price: 50,
    description: 'Secure your site with proper SSL certificate setup.',
    slug: 'ssl-installation',
  },
  {
    title: 'SSL errors fix',
    price: 60,
    description: 'Resolve common SSL handshake and configuration issues.',
    slug: 'ssl-errors-fix',
  },
  {
    title: 'WordPress site optimization',
    price: 120,
    description: 'Improve speed and performance of your WP site.',
    slug: 'wordpress-site-optimization',
  },
  {
    title: 'Database repair',
    price: 90,
    description: 'Fix corrupted databases and restore functionality.',
    slug: 'database-repair',
  },
  {
    title: 'SEO audit',
    price: 200,
    description:
      'Comprehensive analysis and recommendations for better rankings.',
    slug: 'seo-audit',
  },
  {
    title: 'Custom plugin development',
    price: 300,
    description: 'Build tailored plugins for specific needs.',
    slug: 'custom-plugin-development',
  },
  {
    title: 'Malware scan and removal',
    price: 180,
    description: 'Thorough cleaning of infected files.',
    slug: 'malware-scan-and-removal',
  },
  {
    title: 'Site migration',
    price: 150,
    description: 'Seamless transfer to new hosting.',
    slug: 'site-migration',
  },
  {
    title: 'E-commerce setup',
    price: 250,
    description: 'Configure online store features.',
    slug: 'e-commerce-setup',
  },
  {
    title: 'Backup and restore',
    price: 40,
    description: 'Set up automated backups.',
    slug: 'backup-and-restore',
  },
  {
    title: 'Theme customization',
    price: 100,
    description: "Personalize your site's design.",
    slug: 'theme-customization',
  },
  {
    title: 'Plugin conflict resolution',
    price: 80,
    description: 'Fix issues between incompatible plugins.',
    slug: 'plugin-conflict-resolution',
  },
  {
    title: 'Security hardening',
    price: 140,
    description: 'Enhance site protection measures.',
    slug: 'security-hardening',
  },
  {
    title: 'Performance tuning',
    price: 110,
    description: 'Optimize loading times.',
    slug: 'performance-tuning',
  },
  {
    title: 'Content migration',
    price: 90,
    description: 'Transfer content between platforms.',
    slug: 'content-migration',
  },
  {
    title: 'API integration',
    price: 200,
    description: 'Connect third-party services.',
    slug: 'api-integration',
  },
  {
    title: 'Abusix Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Abusix blacklist and protect your online reputation with our expert blacklist removal service.',
    slug: 'abusix-blacklist-removal',
  },
  {
    title: 'ADMINUSLabs Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from ADMINUSLabs blacklist and enhance your website’s security and credibility.',
    slug: 'adminuslabs-blacklist-removal',
  },
  {
    title: 'AegisLab Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AegisLab blacklist and take control of your website’s security with our removal services.',
    slug: 'aegislab-blacklist-removal',
  },
  {
    title: 'Ahnlab Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Ahnlab blacklist and secure your site from future security threats.',
    slug: 'ahnlab-blacklist-removal',
  },
  {
    title: 'AILabs (Monitorapp) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from AILabs blacklist and improve your site’s online security with our expert services.',
    slug: 'ailabs-monitorapp-blacklist-removal',
  },
  {
    title: 'Alibaba Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Alibaba blacklist and safeguard your online presence with our professional services.',
    slug: 'alibaba-blacklist-removal',
  },
  {
    title: 'AlienVault Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AlienVault blacklist and ensure ongoing protection from potential cyber threats.',
    slug: 'alienvault-blacklist-removal',
  },
  {
    title: 'AlphaMountain Blacklist Removal',
    price: 20,
    description:
      'Delist your website from AlphaMountain blacklist and protect your website from future threats with our services.',
    slug: 'alphamountain-blacklist-removal',
  },
  {
    title: 'AlphaSOC Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AlphaSOC blacklist and ensure continuous protection with our professional security services.',
    slug: 'alphasoc-blacklist-removal',
  },
  {
    title: 'Alyac (Estsoft) Blacklist Removal',
    price: 20,
    description:
      'Safeguard your website and remove it from Alyac (Estsoft) blacklist with our tailored removal services.',
    slug: 'alyac-estsoft-blacklist-removal',
  },
  {
    title: 'Antivir Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with Antivir and ensure your website stays secure with our removal services.',
    slug: 'antivir-blacklist-removal',
  },
  {
    title: 'Antiy Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Antiy blacklist and protect it from future attacks with our professional services.',
    slug: 'antiy-blacklist-removal',
  },
  {
    title: 'ArcSight Threat Intelligence Blacklist Removal',
    price: 20,
    description:
      'Remove your website from ArcSight Threat Intelligence blacklist and mitigate future security risks with our removal services.',
    slug: 'arcsight-threat-intelligence-blacklist-removal',
  },
  {
    title: 'AutoShun Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from AutoShun blacklist and take necessary actions to safeguard your site from malicious activities.',
    slug: 'autoshun-blacklist-removal',
  },
  {
    title: 'Avast Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Avast blacklist and ensure it stays secure with Avast’s comprehensive removal services.',
    slug: 'avast-blacklist-removal',
  },
  {
    title: 'AVG Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with AVG and ensure your website’s ongoing protection with our expert services.',
    slug: 'avg-blacklist-removal',
  },
  {
    title: 'Baidu Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Baidu blacklist and protect it from future security threats with our reliable services.',
    slug: 'baidu-blacklist-removal',
  },
  {
    title: 'BitDefender Blacklist Removal',
    price: 20,
    description:
      'Delist your website from BitDefender blacklist and prevent future threats with BitDefender’s professional removal services.',
    slug: 'bitdefender-blacklist-removal',
  },
  {
    title: 'BforeAi Blacklist Removal',
    price: 20,
    description:
      'Remove your website from BforeAi blacklist and protect it from malicious activity with our tailored removal services.',
    slug: 'bforeai-blacklist-removal',
  },
  {
    title: 'Bkav Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Bkav blacklist and ensure your site is safe from future security breaches.',
    slug: 'bkav-blacklist-removal',
  },
  {
    title: 'Certego Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Certego blacklist and prevent future infections with our comprehensive removal service.',
    slug: 'certego-blacklist-removal',
  },
  {
    title: 'Chong Lua Dao Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Chong Lua Dao blacklist and protect your online reputation with our professional services.',
    slug: 'chong-lua-dao-blacklist-removal',
  },
  {
    title: 'CINS Army (Sentinel IPS) Blacklist Removal',
    price: 20,
    description:
      'Get your website off CINS Army (Sentinel IPS) blacklist and prevent future security threats with our removal services.',
    slug: 'cins-army-sentinel-ips-blacklist-removal',
  },
  {
    title: 'ClamAV Blacklist Removal',
    price: 20,
    description:
      'Delist your website from ClamAV blacklist and secure it with ClamAV’s expert removal services.',
    slug: 'clamav-blacklist-removal',
  },
  {
    title: 'Clean-MX Blacklist Removal',
    price: 20,
    description:
      'Get your website off Clean-MX blacklist and prevent future threats with Clean-MX’s expert removal services.',
    slug: 'clean-mx-blacklist-removal',
  },
  {
    title: 'Cluster25 Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with Cluster25 and keep your website secure with their professional removal services.',
    slug: 'cluster25-blacklist-removal',
  },
  {
    title: 'CMC Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from CMC blacklist and protect it from malicious threats with our effective removal services.',
    slug: 'cmc-blacklist-removal',
  },
  {
    title: 'CRDF Blacklist Removal',
    price: 20,
    description:
      'Remove your website from CRDF blacklist and secure it against potential threats with our expert services.',
    slug: 'crdf-blacklist-removal',
  },
  {
    title: 'Criminal IP (AI Spera) Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Criminal IP (AI Spera) blacklist and safeguard your website from cyber threats.',
    slug: 'criminal-ip-ai-spera-blacklist-removal',
  },
  {
    title: 'CrowdSec Blacklist Removal',
    price: 20,
    description:
      'Delist your website from CrowdSec blacklist and protect it from future cyber threats with CrowdSec’s expert removal services.',
    slug: 'crowdsec-blacklist-removal',
  },
  {
    title: 'CrowdStrike Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from CrowdStrike blacklist and secure your website with CrowdStrike’s expert services.',
    slug: 'crowdstrike-blacklist-removal',
  },
  {
    title: 'CyanSecurity Blacklist Removal',
    price: 20,
    description:
      'Protect your website from threats and remove it from CyanSecurity blacklist with our comprehensive removal services.',
    slug: 'cyansecurity-blacklist-removal',
  },
  {
    title: 'Cybereason Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Cybereason blacklist and safeguard your online presence with our professional removal services.',
    slug: 'cybereason-blacklist-removal',
  },
  {
    title: 'Cyble Blacklist Removal',
    price: 20,
    description:
      'Get your website off Cyble blacklist and enhance its security posture with Cyble’s reliable removal services.',
    slug: 'cyble-blacklist-removal',
  },
  {
    title: 'Cylance Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Cylance blacklist and prevent future cyber threats with Cylance’s expert removal services.',
    slug: 'cylance-blacklist-removal',
  },
  {
    title: 'Cynet Blacklist Removal',
    price: 20,
    description:
      'Get your website removed from Cynet blacklist and ensure future security with Cynet’s proactive removal services.',
    slug: 'cynet-blacklist-removal',
  },
  {
    title: 'CyRadar Blacklist Removal',
    price: 20,
    description:
      'Remove your website from CyRadar blacklist and secure your site from future threats with our tailored removal services.',
    slug: 'cyradar-blacklist-removal',
  },
  {
    title: 'Deep Instinct Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Deep Instinct blacklist and improve your website’s security with expert removal services.',
    slug: 'deep-instinct-blacklist-removal',
  },
  {
    title: 'DNS8 Blacklist Removal',
    price: 20,
    description:
      'Delist your website from DNS8 blacklist and protect it from malicious activity with DNS8’s removal service.',
    slug: 'dns8-blacklist-removal',
  },
  {
    title: 'DrWeb Blacklist Removal',
    price: 20,
    description:
      'Remove your website from DrWeb blacklist and safeguard it from future threats with DrWeb’s professional services.',
    slug: 'drweb-blacklist-removal',
  },
  {
    title: 'eGambit (Tehtris) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from eGambit (Tehtris) blacklist and secure your site from future security risks with our services.',
    slug: 'egambit-tehtris-blacklist-removal',
  },
  {
    title: 'Elastic Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Elastic blacklist and ensure future protection with Elastic’s expert removal services.',
    slug: 'elastic-blacklist-removal',
  },
  {
    title: 'Emsisoft Blacklist Removal',
    price: 20,
    description:
      'Emsisoft helps you remove your site from blacklist and safeguard it from future cyber threats.',
    slug: 'emsisoft-blacklist-removal',
  },
  {
    title: 'ESET Blacklist Removal',
    price: 20,
    description:
      'Ensure the security of your site with ESET’s reliable blacklist removal services to prevent future infections.',
    slug: 'eset-blacklist-removal',
  },
  {
    title: 'FireEye Blacklist Removal',
    price: 20,
    description:
      'Get your site off FireEye blacklist and protect it from emerging cyber threats with FireEye’s expert services.',
    slug: 'fireeye-blacklist-removal',
  },
  {
    title: 'F-Prot Blacklist Removal',
    price: 20,
    description:
      'F-Prot offers comprehensive blacklist removal services to secure your website and remove malicious threats.',
    slug: 'f-prot-blacklist-removal',
  },
  {
    title: 'F-Secure Blacklist Removal',
    price: 20,
    description:
      'Remove your site from F-Secure blacklist and keep it secure with F-Secure’s comprehensive removal services.',
    slug: 'f-secure-blacklist-removal',
  },
  {
    title: 'Forcepoint ThreatSeeker Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Forcepoint ThreatSeeker blacklist and enhance your site’s security with Forcepoint’s services.',
    slug: 'forcepoint-threatseeker-blacklist-removal',
  },
  {
    title: 'Fortinet Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays off Fortinet’s blacklist with expert removal services and enhanced security.',
    slug: 'fortinet-blacklist-removal',
  },
  {
    title: 'GData Blacklist Removal',
    price: 20,
    description:
      'Delist your site from GData blacklist and protect your website from future threats with GData’s professional services.',
    slug: 'gdata-blacklist-removal',
  },
  {
    title: 'Google Safe Browsing Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Google Safe Browsing blacklist and restore its trustworthiness in Google’s ecosystem.',
    slug: 'google-safe-browsing-blacklist-removal',
  },
  {
    title: 'Gridinsoft Blacklist Removal',
    price: 20,
    description:
      'Protect your website from malware and remove it from Gridinsoft’s blacklist with expert removal services.',
    slug: 'gridinsoft-blacklist-removal',
  },
  {
    title: 'Hacksoft Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Hacksoft blacklist and ensure its safety with Hacksoft’s tailored removal services.',
    slug: 'hacksoft-blacklist-removal',
  },
  {
    title: 'Hauri Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Hauri blacklist and protect your online presence with Hauri’s professional services.',
    slug: 'hauri-blacklist-removal',
  },
  {
    title: 'Heimdal Blacklist Removal',
    price: 20,
    description:
      'Ensure your site’s security with Heimdal’s reliable blacklist removal services and protect against future risks.',
    slug: 'heimdal-blacklist-removal',
  },
  {
    title: 'Hoplite Industries Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Hoplite Industries blacklist and ensure it’s protected from future threats with our expert removal services.',
    slug: 'hoplite-industries-blacklist-removal',
  },
  {
    title: 'Ikarus Blacklist Removal',
    price: 20,
    description:
      'Protect your website by removing it from Ikarus blacklist with Ikarus’ professional blacklist removal services.',
    slug: 'ikarus-blacklist-removal',
  },
  {
    title: 'IPsum Blacklist Removal',
    price: 20,
    description:
      'Remove your site from IPsum blacklist and ensure your site’s ongoing security with expert removal services.',
    slug: 'ipsum-blacklist-removal',
  },
  {
    title: 'Jiangmin Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Jiangmin blacklist and protect it from future cyber threats with Jiangmin’s tailored services.',
    slug: 'jiangmin-blacklist-removal',
  },
  {
    title: 'K7 Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is safe and secure by removing it from K7 blacklist with expert removal services.',
    slug: 'k7-blacklist-removal',
  },
  {
    title: 'Kaspersky Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Kaspersky blacklist and improve its security with Kaspersky’s professional services.',
    slug: 'kaspersky-blacklist-removal',
  },
  {
    title: 'Lionic Blacklist Removal',
    price: 20,
    description:
      'Protect your website and get it removed from Lionic blacklist with expert services tailored to your needs.',
    slug: 'lionic-blacklist-removal',
  },
  {
    title: 'Lumu Blacklist Removal',
    price: 20,
    description:
      'Ensure your site is free from blacklisting issues with Lumu’s advanced removal services and protection strategies.',
    slug: 'lumu-blacklist-removal',
  },
  {
    title: 'Malbeacon Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Malbeacon blacklist and protect your website with Malbeacon’s professional services.',
    slug: 'malbeacon-blacklist-removal',
  },
  {
    title: 'Malwarebytes Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Malwarebytes blacklist and enhance your site’s security with Malwarebytes’ services.',
    slug: 'malwarebytes-blacklist-removal',
  },
  {
    title: 'Malwares.com (Saint Security) Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Malwares.com (Saint Security) blacklist and secure your site with expert removal services.',
    slug: 'malwares-com-saint-security-blacklist-removal',
  },
  {
    title: 'MAX (SaintSecurity) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from MAX (SaintSecurity) blacklist and secure it from future threats with expert services.',
    slug: 'max-saintsecurity-blacklist-removal',
  },
  {
    title: 'MaxSecure Blacklist Removal',
    price: 20,
    description:
      'Delist your website from MaxSecure blacklist and ensure ongoing protection from cyber threats with MaxSecure services.',
    slug: 'maxsecure-blacklist-removal',
  },
  {
    title: 'McAfee Blacklist Removal',
    price: 20,
    description:
      'Remove your website from McAfee blacklist and secure it from future attacks with McAfee’s professional services.',
    slug: 'mcafee-blacklist-removal',
  },
  {
    title: 'Skyhigh Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Skyhigh blacklist and ensure its ongoing protection with expert services.',
    slug: 'skyhigh-blacklist-removal',
  },
  {
    title: 'Microsoft Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Microsoft blacklist and protect your online reputation with Microsoft’s professional services.',
    slug: 'microsoft-blacklist-removal',
  },
  {
    title: 'Microworld Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays secure and get it removed from Microworld blacklist with expert services.',
    slug: 'microworld-blacklist-removal',
  },
  {
    title: 'NANO Blacklist Removal',
    price: 20,
    description:
      'Delist your site from NANO blacklist and enhance its security posture with expert removal services.',
    slug: 'nano-blacklist-removal',
  },
  {
    title: 'Netcraft Blacklist Removal',
    price: 20,
    description:
      'Protect your online presence by getting your site removed from Netcraft blacklist with professional services.',
    slug: 'netcraft-blacklist-removal',
  },
  {
    title: 'Panda Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Panda blacklist and secure it from future threats with Panda’s comprehensive removal services.',
    slug: 'panda-blacklist-removal',
  },
  {
    title: 'Phishing Database Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Phishing Database blacklist and prevent future phishing threats with professional services.',
    slug: 'phishing-database-blacklist-removal',
  },
  {
    title: 'PhishLabs Blacklist Removal',
    price: 20,
    description:
      'Remove your site from PhishLabs blacklist and protect it from future phishing attacks with expert removal services.',
    slug: 'phishlabs-blacklist-removal',
  },
  {
    title: 'Qihoo360 Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is safe and removed from Qihoo360 blacklist with Qihoo360’s removal services.',
    slug: 'qihoo360-blacklist-removal',
  },
  {
    title: 'QuickHeal Blacklist Removal',
    price: 20,
    description:
      'Delist your site from QuickHeal blacklist and secure it from future cyber threats with QuickHeal’s services.',
    slug: 'quickheal-blacklist-removal',
  },
  {
    title: 'Quttera Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Quttera blacklist and protect it with Quttera’s comprehensive security services.',
    slug: 'quttera-blacklist-removal',
  },
  {
    title: 'Rising Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Rising blacklist and protect your website with Rising’s professional services.',
    slug: 'rising-blacklist-removal',
  },
  {
    title: 'Sangfor Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Sangfor blacklist and ensure future protection with Sangfor’s expert removal services.',
    slug: 'sangfor-blacklist-removal',
  },
  {
    title: 'Safe Browsing Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Safe Browsing blacklist and ensure it is safe from future threats with Safe Browsing’s services.',
    slug: 'safe-browsing-blacklist-removal',
  },
  {
    title: 'Scumware.org Blacklist Removal',
    price: 20,
    description:
      'Protect your website from threats by removing it from Scumware.org blacklist with our professional services.',
    slug: 'scumware-org-blacklist-removal',
  },
  {
    title: 'SecureAge Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from SecureAge blacklist and secure it from cyber threats with SecureAge’s expert services.',
    slug: 'secureage-blacklist-removal',
  },
  {
    title: 'Seclookup Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Seclookup blacklist and protect it from future threats with ourprofessional removal services.',
    slug: 'seclookup-blacklist-removal',
  },
  {
    title: 'Segasec Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Segasec blacklist and safeguard it from malicious activities with Segasec’s services.',
    slug: 'segasec-blacklist-removal',
  },
  {
    title: 'Sentinel One Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Sentinel One blacklist and enhance its security posture with Sentinel One’s services.',
    slug: 'sentinel-one-blacklist-removal',
  },
  {
    title: 'SOCRadar Blacklist Removal',
    price: 20,
    description:
      'Ensure your website stays secure by removing it from SOCRadar blacklist with expert removal services.',
    slug: 'socradar-blacklist-removal',
  },
  {
    title: 'Sophos Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Sophos blacklist and protect it from cyber threats with Sophos’ professional services.',
    slug: 'sophos-blacklist-removal',
  },
  {
    title: 'Spamhaus Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Spamhaus blacklist and ensure continuous security with Spamhaus’s expert removal services.',
    slug: 'spamhaus-blacklist-removal',
  },
  {
    title: 'Sucuri Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Sucuri blacklist and protect it from malware with Sucuri’s professional services.',
    slug: 'sucuri-blacklist-removal',
  },
  {
    title: 'Symantec Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Symantec blacklist and ensure it remains secure with Symantec’s expert services.',
    slug: 'symantec-blacklist-removal',
  },
  {
    title: 'Tencent Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Tencent blacklist and protect it from potential threats with Tencent’s expert services.',
    slug: 'tencent-blacklist-removal',
  },
  {
    title: 'TheHacker Blacklist Removal',
    price: 20,
    description:
      'Delist your website from TheHacker blacklist and protect it from malicious activities with TheHacker’s services.',
    slug: 'thehacker-blacklist-removal',
  },
  {
    title: 'Trapmine Blacklist Removal',
    price: 20,
    description:
      'Get your website off Trapmine blacklist and safeguard it from potential security threats with Trapmine’s removal services.',
    slug: 'trapmine-blacklist-removal',
  },
  {
    title: 'TrendMicro Blacklist Removal',
    price: 20,
    description:
      'Remove your site from TrendMicro blacklist and improve your website’s security with TrendMicro’s professional services.',
    slug: 'trendmicro-blacklist-removal',
  },
  {
    title: 'Trustwave Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Trustwave blacklist and secure your online presence with Trustwave’s removal services.',
    slug: 'trustwave-blacklist-removal',
  },
  {
    title: 'Trustlook Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Trustlook blacklist and protect your website from future cyber threats with Trustlook’s services.',
    slug: 'trustlook-blacklist-removal',
  },
  {
    title: 'URLQuery Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is secure and delisted from URLQuery blacklist with expert services to remove future threats.',
    slug: 'urlquery-blacklist-removal',
  },
  {
    title: 'Varist Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Varist blacklist and protect it from malicious threats with Varist’s professional services.',
    slug: 'varist-blacklist-removal',
  },
  {
    title: 'VBA32 Blacklist Removal',
    price: 20,
    description:
      'Remove your website from VBA32 blacklist and ensure it remains secure with expert removal services from VBA32.',
    slug: 'vba32-blacklist-removal',
  },
  {
    title: 'Viettel Threat Intelligence Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Viettel Threat Intelligence blacklist and safeguard it from future threats.',
    slug: 'viettel-threat-intelligence-blacklist-removal',
  },
  {
    title: 'Vipre Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Vipre blacklist and protect it from cyber threats with Vipre’s expert services.',
    slug: 'vipre-blacklist-removal',
  },
  {
    title: 'VirIT Blacklist Removal',
    price: 20,
    description:
      'Delist your website from VirIT blacklist and protect your online presence with VirIT’s professional services.',
    slug: 'virit-blacklist-removal',
  },
  {
    title: 'VirusDie Blacklist Removal',
    price: 20,
    description:
      'Remove your site from VirusDie blacklist and ensure it is secure from future threats with VirusDie’s removal services.',
    slug: 'virusdie-blacklist-removal',
  },
  {
    title: 'Webroot Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Webroot blacklist and protect it from malware and other threats with Webroot’s services.',
    slug: 'webroot-blacklist-removal',
  },
  {
    title: 'Xcitium Verdict Cloud (Comodo) Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Xcitium Verdict Cloud (Comodo) blacklist and protect it from future cyber threats with expert services.',
    slug: 'xcitium-verdict-cloud-comodo-blacklist-removal',
  },
  {
    title: 'Yandex Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays secure and free from blacklisting issues with Yandex’s expert removal services.',
    slug: 'yandex-blacklist-removal',
  },
  {
    title: 'Zillya Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Zillya blacklist and enhance your site’s security posture with Zillya’s professional services.',
    slug: 'zillya-blacklist-removal',
  },
  {
    title: 'ZoneAlarm Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from ZoneAlarm blacklist and protect your site from future cyber threats with expert services.',
    slug: 'zonealarm-blacklist-removal',
  },
];
