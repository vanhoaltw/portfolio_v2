import Script from 'next/script';

const FacebookChat = () => {
  return (
    <div>
      <div id='fb-root'></div>
      <div id='fb-customer-chat' className='fb-customerchat'></div>
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy='lazyOnload'>
        {`
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "xxREPLACEMEWITHREALDATAxxxx");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v15.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `}
      </Script>
    </div>
  );
};

export default FacebookChat;
