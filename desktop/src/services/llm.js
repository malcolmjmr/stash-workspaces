import { config } from "./config";

export class LLM {

    async claudeChatCompletion({
        prompt, 
        systemPrompt, 
        messages, 
        model = 'claude-3-haiku-20240307', 
        maxTokens = 500, 
        temp = 0.5
    }) {
        const apiUrl = 'https://api.anthropic.com/v1/messages';
    
        if (messages == null && prompt == null) return;
        
        let body = '';
        try {
          body = JSON.stringify({
            'model': model, // You can choose a different model based on your needs
            'messages': prompt != null 
              ? [{
                  "role": "system",
                  "content": systemPrompt ?? "You are a helpful assistant."
                },
                {
                  "role": "user",
                  "content": prompt
                }]
              : messages,
            'max_tokens': maxTokens, // Adjust based on how lengthy you expect the response to be
            'temperature': temp, // Adjust for creativity. Lower values mean more deterministic.
          });
        } catch (e) {
          console.log(e);
          //console.log(body);
        }
        
    
        var response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': `${config.claudeApiKey}`,
                'anthropic-version': '2023-06-01',
            },
            body: body,
        });
    
    
    
        if (response.ok) {
          var data = await response.json();
          const generatedText = data['choices'][0]['message']['content'];
          // Further processing can be done here to clean and format the generated list
    
          return generatedText;
        } else {
          console.log(response.status);
          console.log(response.body);
          console.log(response);

          console.log('sent body');
          console.log(body);
          
        }
      }
  
    
    async mistralChatCompletion({
        prompt, 
        systemPrompt, 
        messages, 
        model = 'open-mistral-7b', 
        maxTokens = 500, 
        temp = 0.5
    }) {
        const apiUrl = 'https://api.mistral.ai/v1/chat/completions';
    
        if (messages == null && prompt == null) return;
        
        let body = '';
        try {
          body = JSON.stringify({
            'model': model, // You can choose a different model based on your needs
            'messages': prompt != null 
              ? [{
                  "role": "system",
                  "content": "You are a helpful assistant."
                },
                {
                  "role": "user",
                  "content": prompt
                }]
              : messages,
            'max_tokens': maxTokens, // Adjust based on how lengthy you expect the response to be
            'temperature': temp, // Adjust for creativity. Lower values mean more deterministic.
          });
        } catch (e) {
          console.log(e);
          //console.log(body);
        }
        
    
        var response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.mistralApiKey}`,
            },
            body: body,
        });
    
    
    
        if (response.ok) {
          var data = await response.json();
          const generatedText = data['choices'][0]['message']['content'];
          // Further processing can be done here to clean and format the generated list
    
          return generatedText;
        } else {
          console.log(response.status);
          console.log(response.body);
          console.log(response);
          
        }
      }
    
    
    
    async openAiChatCompletion({
        prompt, 
        messages,
        model = 'gpt-3.5-turbo-0125',
        maxTokens = 500, 
        temp = 0
    }) {
        let openAiUrl = 'https://api.openai.com/v1/chat/completions';
    
        if (messages == null && prompt == null) return;
    
        var response = await fetch(openAiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.openAiApiKey}`,
            },
            body: JSON.stringify({
                'model': model, // You can choose a different model based on your needs
                'messages': prompt != null 
                ? [{
                    "role": "system",
                    "content": "You are a helpful assistant."
                    },
                    {
                    "role": "user",
                    "content": prompt
                    }]
                : messages,
                'max_tokens': maxTokens, // Adjust based on how lengthy you expect the response to be
                'temperature': temp, // Adjust for creativity. Lower values mean more deterministic.
            }),
        });
    
        if (response.ok) {
            var data = await response.json();
            const generatedText = data['choices'][0]['message']['content'];
            // Further processing can be done here to clean and format the generated list
      
            return generatedText;
          } else {
            console.log(response.status);
            console.log(response.body);
            console.log(response.text());
  
            console.log('sent body');
            console.log(body);
            
          }
      }
}