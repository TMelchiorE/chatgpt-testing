var argv = require('minimist-lite')(process.argv.slice(2));
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

// check args for function/input
if (argv.c){
    chat();
}
else if (argv.l)
{
    listmodels();
}
else {
    console.log("***try adding these params***")
    console.log("   -c='chat question'") 
    console.log("   -l  (list available models)")  
}

// sends general question -> gets answer
async function chat(){

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: argv.c}],
    });
    
    console.log(completion.data.choices[0].message.content);

}

// list available models
async function listmodels(){

    const response = await openai.listModels();
    console.log(response.data);
}
