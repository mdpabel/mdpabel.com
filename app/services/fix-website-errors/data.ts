interface Service {
  title: string;
  price: number; // in USD, for example
  description: string;
}

export const allServices: Service[] = [
  {
    title: 'Google Safe browsing blacklist removal',
    price: 150,
    description:
      "Remove your site from Google's blacklist and restore visibility.",
  },
  {
    title: 'Fix http 500 internal server error',
    price: 80,
    description: 'Diagnose and resolve server-side errors quickly.',
  },
  {
    title: 'Fix http 403 forbidden error',
    price: 70,
    description: 'Correct permission issues preventing access to your site.',
  },
  {
    title: 'Fatal error resolution',
    price: 100,
    description: 'Fix critical PHP or script errors causing site crashes.',
  },
  {
    title: 'SSL installation',
    price: 50,
    description: 'Secure your site with proper SSL certificate setup.',
  },
  {
    title: 'SSL errors fix',
    price: 60,
    description: 'Resolve common SSL handshake and configuration issues.',
  },
  {
    title: 'WordPress site optimization',
    price: 120,
    description: 'Improve speed and performance of your WP site.',
  },
  {
    title: 'Database repair',
    price: 90,
    description: 'Fix corrupted databases and restore functionality.',
  },
  {
    title: 'SEO audit',
    price: 200,
    description:
      'Comprehensive analysis and recommendations for better rankings.',
  },
  {
    title: 'Custom plugin development',
    price: 300,
    description: 'Build tailored plugins for specific needs.',
  },
  // Add more services here to reach 100+...
  // For demonstration, repeating some with variations
  {
    title: 'Malware scan and removal',
    price: 180,
    description: 'Thorough cleaning of infected files.',
  },
  {
    title: 'Site migration',
    price: 150,
    description: 'Seamless transfer to new hosting.',
  },
  {
    title: 'E-commerce setup',
    price: 250,
    description: 'Configure online store features.',
  },
  {
    title: 'Backup and restore',
    price: 40,
    description: 'Set up automated backups.',
  },
  {
    title: 'Theme customization',
    price: 100,
    description: "Personalize your site's design.",
  },
  {
    title: 'Plugin conflict resolution',
    price: 80,
    description: 'Fix issues between incompatible plugins.',
  },
  {
    title: 'Security hardening',
    price: 140,
    description: 'Enhance site protection measures.',
  },
  {
    title: 'Performance tuning',
    price: 110,
    description: 'Optimize loading times.',
  },
  {
    title: 'Content migration',
    price: 90,
    description: 'Transfer content between platforms.',
  },
  {
    title: 'API integration',
    price: 200,
    description: 'Connect third-party services.',
  },
  // ... continue adding up to 100+
  {
    title: 'Abusix Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Abusix blacklist and protect your online reputation with our expert blacklist removal service.',
  },
  {
    title: 'ADMINUSLabs Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from ADMINUSLabs blacklist and enhance your website’s security and credibility.',
  },
  {
    title: 'AegisLab Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AegisLab blacklist and take control of your website’s security with our removal services.',
  },
  {
    title: 'Ahnlab Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Ahnlab blacklist and secure your site from future security threats.',
  },
  {
    title: 'AILabs (Monitorapp) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from AILabs blacklist and improve your site’s online security with our expert services.',
  },
  {
    title: 'Alibaba Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Alibaba blacklist and safeguard your online presence with our professional services.',
  },
  {
    title: 'AlienVault Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AlienVault blacklist and ensure ongoing protection from potential cyber threats.',
  },
  {
    title: 'AlphaMountain Blacklist Removal',
    price: 20,
    description:
      'Delist your website from AlphaMountain blacklist and protect your website from future threats with our services.',
  },
  {
    title: 'AlphaSOC Blacklist Removal',
    price: 20,
    description:
      'Remove your site from AlphaSOC blacklist and ensure continuous protection with our professional security services.',
  },
  {
    title: 'Alyac (Estsoft) Blacklist Removal',
    price: 20,
    description:
      'Safeguard your website and remove it from Alyac (Estsoft) blacklist with our tailored removal services.',
  },
  {
    title: 'Antivir Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with Antivir and ensure your website stays secure with our removal services.',
  },
  {
    title: 'Antiy Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Antiy blacklist and protect it from future attacks with our professional services.',
  },
  {
    title: 'ArcSight Threat Intelligence Blacklist Removal',
    price: 20,
    description:
      'Remove your website from ArcSight Threat Intelligence blacklist and mitigate future security risks with our removal services.',
  },
  {
    title: 'AutoShun Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from AutoShun blacklist and take necessary actions to safeguard your site from malicious activities.',
  },
  {
    title: 'Avast Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Avast blacklist and ensure it stays secure with Avast’s comprehensive removal services.',
  },
  {
    title: 'AVG Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with AVG and ensure your website’s ongoing protection with our expert services.',
  },
  {
    title: 'Baidu Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Baidu blacklist and protect it from future security threats with our reliable services.',
  },
  {
    title: 'BitDefender Blacklist Removal',
    price: 20,
    description:
      'Delist your website from BitDefender blacklist and prevent future threats with BitDefender’s professional removal services.',
  },
  {
    title: 'BforeAi Blacklist Removal',
    price: 20,
    description:
      'Remove your website from BforeAi blacklist and protect it from malicious activity with our tailored removal services.',
  },
  {
    title: 'Bkav Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Bkav blacklist and ensure your site is safe from future security breaches.',
  },
  {
    title: 'Certego Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Certego blacklist and prevent future infections with our comprehensive removal service.',
  },
  {
    title: 'Chong Lua Dao Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Chong Lua Dao blacklist and protect your online reputation with our professional services.',
  },
  {
    title: 'CINS Army (Sentinel IPS) Blacklist Removal',
    price: 20,
    description:
      'Get your website off CINS Army (Sentinel IPS) blacklist and prevent future security threats with our removal services.',
  },
  {
    title: 'ClamAV Blacklist Removal',
    price: 20,
    description:
      'Delist your website from ClamAV blacklist and secure it with ClamAV’s expert removal services.',
  },
  {
    title: 'Clean-MX Blacklist Removal',
    price: 20,
    description:
      'Get your website off Clean-MX blacklist and prevent future threats with Clean-MX’s expert removal services.',
  },
  {
    title: 'Cluster25 Blacklist Removal',
    price: 20,
    description:
      'Resolve blacklist issues with Cluster25 and keep your website secure with their professional removal services.',
  },
  {
    title: 'CMC Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from CMC blacklist and protect it from malicious threats with our effective removal services.',
  },
  {
    title: 'CRDF Blacklist Removal',
    price: 20,
    description:
      'Remove your website from CRDF blacklist and secure it against potential threats with our expert services.',
  },
  {
    title: 'Criminal IP (AI Spera) Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Criminal IP (AI Spera) blacklist and safeguard your website from cyber threats.',
  },
  {
    title: 'CrowdSec Blacklist Removal',
    price: 20,
    description:
      'Delist your website from CrowdSec blacklist and protect it from future cyber threats with CrowdSec’s expert removal services.',
  },
  {
    title: 'CrowdStrike Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from CrowdStrike blacklist and secure your website with CrowdStrike’s expert services.',
  },
  {
    title: 'CyanSecurity Blacklist Removal',
    price: 20,
    description:
      'Protect your website from threats and remove it from CyanSecurity blacklist with our comprehensive removal services.',
  },
  {
    title: 'Cybereason Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Cybereason blacklist and safeguard your online presence with our professional removal services.',
  },
  {
    title: 'Cyble Blacklist Removal',
    price: 20,
    description:
      'Get your website off Cyble blacklist and enhance its security posture with Cyble’s reliable removal services.',
  },
  {
    title: 'Cylance Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Cylance blacklist and prevent future cyber threats with Cylance’s expert removal services.',
  },
  {
    title: 'Cynet Blacklist Removal',
    price: 20,
    description:
      'Get your website removed from Cynet blacklist and ensure future security with Cynet’s proactive removal services.',
  },
  {
    title: 'CyRadar Blacklist Removal',
    price: 20,
    description:
      'Remove your website from CyRadar blacklist and secure your site from future threats with our tailored removal services.',
  },
  {
    title: 'Deep Instinct Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Deep Instinct blacklist and improve your website’s security with expert removal services.',
  },
  {
    title: 'DNS8 Blacklist Removal',
    price: 20,
    description:
      'Delist your website from DNS8 blacklist and protect it from malicious activity with DNS8’s removal service.',
  },
  {
    title: 'DrWeb Blacklist Removal',
    price: 20,
    description:
      'Remove your website from DrWeb blacklist and safeguard it from future threats with DrWeb’s professional services.',
  },
  {
    title: 'eGambit (Tehtris) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from eGambit (Tehtris) blacklist and secure your site from future security risks with our services.',
  },
  {
    title: 'Elastic Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Elastic blacklist and ensure future protection with Elastic’s expert removal services.',
  },
  {
    title: 'Emsisoft Blacklist Removal',
    price: 20,
    description:
      'Emsisoft helps you remove your site from blacklist and safeguard it from future cyber threats.',
  },
  {
    title: 'ESET Blacklist Removal',
    price: 20,
    description:
      'Ensure the security of your site with ESET’s reliable blacklist removal services to prevent future infections.',
  },
  {
    title: 'FireEye Blacklist Removal',
    price: 20,
    description:
      'Get your site off FireEye blacklist and protect it from emerging cyber threats with FireEye’s expert services.',
  },
  {
    title: 'F-Prot Blacklist Removal',
    price: 20,
    description:
      'F-Prot offers comprehensive blacklist removal services to secure your website and remove malicious threats.',
  },
  {
    title: 'F-Secure Blacklist Removal',
    price: 20,
    description:
      'Remove your site from F-Secure blacklist and keep it secure with F-Secure’s comprehensive removal services.',
  },
  {
    title: 'Forcepoint ThreatSeeker Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Forcepoint ThreatSeeker blacklist and enhance your site’s security with Forcepoint’s services.',
  },
  {
    title: 'Fortinet Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays off Fortinet’s blacklist with expert removal services and enhanced security.',
  },
  {
    title: 'GData Blacklist Removal',
    price: 20,
    description:
      'Delist your site from GData blacklist and protect your website from future threats with GData’s professional services.',
  },
  {
    title: 'Google Safe Browsing Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Google Safe Browsing blacklist and restore its trustworthiness in Google’s ecosystem.',
  },
  {
    title: 'Gridinsoft Blacklist Removal',
    price: 20,
    description:
      'Protect your website from malware and remove it from Gridinsoft’s blacklist with expert removal services.',
  },
  {
    title: 'Hacksoft Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Hacksoft blacklist and ensure its safety with Hacksoft’s tailored removal services.',
  },
  {
    title: 'Hauri Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Hauri blacklist and protect your online presence with Hauri’s professional services.',
  },
  {
    title: 'Heimdal Blacklist Removal',
    price: 20,
    description:
      'Ensure your site’s security with Heimdal’s reliable blacklist removal services and protect against future risks.',
  },
  {
    title: 'Hoplite Industries Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Hoplite Industries blacklist and ensure it’s protected from future threats with our expert removal services.',
  },
  {
    title: 'Ikarus Blacklist Removal',
    price: 20,
    description:
      'Protect your website by removing it from Ikarus blacklist with Ikarus’ professional blacklist removal services.',
  },
  {
    title: 'IPsum Blacklist Removal',
    price: 20,
    description:
      'Remove your site from IPsum blacklist and ensure your site’s ongoing security with expert removal services.',
  },
  {
    title: 'Jiangmin Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Jiangmin blacklist and protect it from future cyber threats with Jiangmin’s tailored services.',
  },
  {
    title: 'K7 Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is safe and secure by removing it from K7 blacklist with expert removal services.',
  },
  {
    title: 'Kaspersky Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Kaspersky blacklist and improve its security with Kaspersky’s professional services.',
  },
  {
    title: 'Lionic Blacklist Removal',
    price: 20,
    description:
      'Protect your website and get it removed from Lionic blacklist with expert services tailored to your needs.',
  },
  {
    title: 'Lumu Blacklist Removal',
    price: 20,
    description:
      'Ensure your site is free from blacklisting issues with Lumu’s advanced removal services and protection strategies.',
  },
  {
    title: 'Malbeacon Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from Malbeacon blacklist and protect your website with Malbeacon’s professional services.',
  },
  {
    title: 'Malwarebytes Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Malwarebytes blacklist and enhance your site’s security with Malwarebytes’ services.',
  },
  {
    title: 'Malwares.com (Saint Security) Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Malwares.com (Saint Security) blacklist and secure your site with expert removal services.',
  },
  {
    title: 'MAX (SaintSecurity) Blacklist Removal',
    price: 20,
    description:
      'Remove your website from MAX (SaintSecurity) blacklist and secure it from future threats with expert services.',
  },
  {
    title: 'MaxSecure Blacklist Removal',
    price: 20,
    description:
      'Delist your website from MaxSecure blacklist and ensure ongoing protection from cyber threats with MaxSecure services.',
  },
  {
    title: 'McAfee Blacklist Removal',
    price: 20,
    description:
      'Remove your website from McAfee blacklist and secure it from future attacks with McAfee’s professional services.',
  },
  {
    title: 'Skyhigh Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Skyhigh blacklist and ensure its ongoing protection with expert services.',
  },
  {
    title: 'Microsoft Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Microsoft blacklist and protect your online reputation with Microsoft’s professional services.',
  },
  {
    title: 'Microworld Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays secure and get it removed from Microworld blacklist with expert services.',
  },
  {
    title: 'NANO Blacklist Removal',
    price: 20,
    description:
      'Delist your site from NANO blacklist and enhance its security posture with expert removal services.',
  },
  {
    title: 'Netcraft Blacklist Removal',
    price: 20,
    description:
      'Protect your online presence by getting your site removed from Netcraft blacklist with professional services.',
  },
  {
    title: 'Panda Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Panda blacklist and secure it from future threats with Panda’s comprehensive removal services.',
  },
  {
    title: 'Phishing Database Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Phishing Database blacklist and prevent future phishing threats with professional services.',
  },
  {
    title: 'PhishLabs Blacklist Removal',
    price: 20,
    description:
      'Remove your site from PhishLabs blacklist and protect it from future phishing attacks with expert removal services.',
  },
  {
    title: 'Qihoo360 Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is safe and removed from Qihoo360 blacklist with Qihoo360’s removal services.',
  },
  {
    title: 'QuickHeal Blacklist Removal',
    price: 20,
    description:
      'Delist your site from QuickHeal blacklist and secure it from future cyber threats with QuickHeal’s services.',
  },
  {
    title: 'Quttera Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Quttera blacklist and protect it with Quttera’s comprehensive security services.',
  },
  {
    title: 'Rising Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Rising blacklist and protect your website with Rising’s professional services.',
  },
  {
    title: 'Sangfor Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Sangfor blacklist and ensure future protection with Sangfor’s expert removal services.',
  },
  {
    title: 'Safe Browsing Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Safe Browsing blacklist and ensure it is safe from future threats with Safe Browsing’s services.',
  },
  {
    title: 'Scumware.org Blacklist Removal',
    price: 20,
    description:
      'Protect your website from threats by removing it from Scumware.org blacklist with our professional services.',
  },
  {
    title: 'SecureAge Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from SecureAge blacklist and secure it from cyber threats with SecureAge’s expert services.',
  },
  {
    title: 'Seclookup Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Seclookup blacklist and protect it from future threats with our professional removal services.',
  },
  {
    title: 'Segasec Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Segasec blacklist and safeguard it from malicious activities with Segasec’s services.',
  },
  {
    title: 'Sentinel One Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Sentinel One blacklist and enhance its security posture with Sentinel One’s services.',
  },
  {
    title: 'SOCRadar Blacklist Removal',
    price: 20,
    description:
      'Ensure your website stays secure by removing it from SOCRadar blacklist with expert removal services.',
  },
  {
    title: 'Sophos Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Sophos blacklist and protect it from cyber threats with Sophos’ professional services.',
  },
  {
    title: 'Spamhaus Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Spamhaus blacklist and ensure continuous security with Spamhaus’s expert removal services.',
  },
  {
    title: 'Sucuri Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Sucuri blacklist and protect it from malware with Sucuri’s professional services.',
  },
  {
    title: 'Symantec Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Symantec blacklist and ensure it remains secure with Symantec’s expert services.',
  },
  {
    title: 'Tencent Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Tencent blacklist and protect it from potential threats with Tencent’s expert services.',
  },
  {
    title: 'TheHacker Blacklist Removal',
    price: 20,
    description:
      'Delist your website from TheHacker blacklist and protect it from malicious activities with TheHacker’s services.',
  },
  {
    title: 'Trapmine Blacklist Removal',
    price: 20,
    description:
      'Get your website off Trapmine blacklist and safeguard it from potential security threats with Trapmine’s removal services.',
  },
  {
    title: 'TrendMicro Blacklist Removal',
    price: 20,
    description:
      'Remove your site from TrendMicro blacklist and improve your website’s security with TrendMicro’s professional services.',
  },
  {
    title: 'Trustwave Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Trustwave blacklist and secure your online presence with Trustwave’s removal services.',
  },
  {
    title: 'Trustlook Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Trustlook blacklist and protect your website from future cyber threats with Trustlook’s services.',
  },
  {
    title: 'URLQuery Blacklist Removal',
    price: 20,
    description:
      'Ensure your website is secure and delisted from URLQuery blacklist with expert services to remove future threats.',
  },
  {
    title: 'Varist Blacklist Removal',
    price: 20,
    description:
      'Delist your site from Varist blacklist and protect it from malicious threats with Varist’s professional services.',
  },
  {
    title: 'VBA32 Blacklist Removal',
    price: 20,
    description:
      'Remove your website from VBA32 blacklist and ensure it remains secure with expert removal services from VBA32.',
  },
  {
    title: 'Viettel Threat Intelligence Blacklist Removal',
    price: 20,
    description:
      'Get your website delisted from Viettel Threat Intelligence blacklist and safeguard it from future threats.',
  },
  {
    title: 'Vipre Blacklist Removal',
    price: 20,
    description:
      'Remove your website from Vipre blacklist and protect it from cyber threats with Vipre’s expert services.',
  },
  {
    title: 'VirIT Blacklist Removal',
    price: 20,
    description:
      'Delist your website from VirIT blacklist and protect your online presence with VirIT’s professional services.',
  },
  {
    title: 'VirusDie Blacklist Removal',
    price: 20,
    description:
      'Remove your site from VirusDie blacklist and ensure it is secure from future threats with VirusDie’s removal services.',
  },
  {
    title: 'Webroot Blacklist Removal',
    price: 20,
    description:
      'Get your site delisted from Webroot blacklist and protect it from malware and other threats with Webroot’s services.',
  },
  {
    title: 'Xcitium Verdict Cloud (Comodo) Blacklist Removal',
    price: 20,
    description:
      'Delist your website from Xcitium Verdict Cloud (Comodo) blacklist and protect it from future cyber threats with expert services.',
  },
  {
    title: 'Yandex Blacklist Removal',
    price: 20,
    description:
      'Ensure your site stays secure and free from blacklisting issues with Yandex’s expert removal services.',
  },
  {
    title: 'Zillya Blacklist Removal',
    price: 20,
    description:
      'Remove your site from Zillya blacklist and enhance your site’s security posture with Zillya’s professional services.',
  },
  {
    title: 'ZoneAlarm Blacklist Removal',
    price: 20,
    description:
      'Get your site removed from ZoneAlarm blacklist and protect your site from future cyber threats with expert services.',
  },
];
