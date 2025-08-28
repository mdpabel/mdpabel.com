import Script from 'next/script';

const TawkTo = () => {
  return (
    <>
      <Script
        strategy='afterInteractive' // Ensures the script loads after the page content
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68b076a8beccc01925d92112/1j3okv147';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />
    </>
  );
};

export default TawkTo;
