import { useEffect } from 'react';

const BotpressInit = () => {
  useEffect(() => {
    // Wait for Botpress to be available
    const initBotpress = () => {
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });
        
        window.botpress.init({
          "botId": "9bd8469c-159d-49cc-8975-8652ccebe1e4",
          "configuration": {
            "version": "v2",
            "botName": "Asistente Educativo de La Empresa",
            "botDescription": "",
            "website": {},
            "email": {},
            "phone": {},
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#459d8c",
            "variant": "solid",
            "headerVariant": "glass",
            "themeMode": "light",
            "fontFamily": "inter",
            "radius": 2,
            "feedbackEnabled": false,
            "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)",
            "soundEnabled": false,
            "proactiveMessageEnabled": false,
            "proactiveBubbleMessage": "Hi! 👋 Need help?",
            "proactiveBubbleTriggerType": "afterDelay",
            "proactiveBubbleDelayTime": 10
          },
          "clientId": "8cc166f4-9de2-46ea-9cc8-aa763705b682",
          "selector": "#webchat"
        });
      } else {
        // Retry if Botpress is not loaded yet
        setTimeout(initBotpress, 100);
      }
    };

    initBotpress();
  }, []);

  return null;
};

export default BotpressInit;

declare global {
  interface Window {
    botpress: any;
  }
}
