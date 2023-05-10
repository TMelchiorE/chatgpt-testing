var argv = require('minimist-lite')(process.argv.slice(2));
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

// check args for function/input
if (argv.q){
    chatContent();
}
else {
    console.log("***try adding these params***")
    console.log("   -q='ask a question'")
}

// sends general question -> gets answer
async function chatContent(){

    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: argv.q}],
    });
    //console.log(completion.data.choices[0].message);
    console.log(completion.data.choices[0].message.content);

}
