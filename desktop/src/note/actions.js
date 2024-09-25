
/*
    Todo:
    - specify whether to replace text or append
*/
export const actions = [
    {
        name: "Expand the Current Sentence",
        shortName: "Expand",
        description: "Expands the current sentence with more detail or context, providing a deeper understanding.",
        prompt: "Complete the above text without reproducing the original text.",
        emoji: "🖋️",
        maxTokens: "20"
      },
      {
        name: "Make a Section More Concise",
        shortName: "Concise",
        description: "Condenses the selected section into a more succinct form without losing the essential meaning.",
        prompt: "Rewrite the section succinctly, focusing only on the essential ideas that contribute directly to the main message.",
        emoji: "✂️",
        replace: true,
      },
      {
        name: "Make Section More Concrete",
        shortName: "Concrete",
        description: "Clarifies the selected section by adding specific details, examples, or clarifications to make it more tangible.",
        prompt: "Examine the abstract concepts or generalizations in the section above. Consider specific examples and tangible details that could illustrate these concepts. Enhance the section by integrating these concrete examples, making the content more relatable and understandable.",
        emoji: "🧱",
        replace: true,
        maxTokens: 300,
    },
    {
        name: "Adjust for Tone or Style",
        shortName: "Adjust",
        description: "Modifies the text to fit a specific tone or style, such as formal, informal, persuasive, or descriptive.",
        prompt: "Evaluate the current tone and style of the content above. Consider the intended audience and purpose of the communication. Identify elements that could be adjusted to better fit the desired tone or style, and rewrite the content accordingly, maintaining the original intent and information.",
        emoji: "🎨",
        replace: true,
      },
    {
      name: "Ask a Question",
      shortName: "Question",
      description: "Generates a question based on the selected text to encourage further exploration or clarification.",
      prompt: "Consider the main themes and details of the content above. Identify areas that might provoke curiosity or require further clarification. Formulate a question that naturally arises from these considerations, encouraging deeper exploration of the topic.",
      emoji: "❓"

    },
    {
      name: "Provide a Counterpoint",
      shortName: "Counterpoint",
      description: "Offers an alternative perspective or argument to the current text, enriching the discussion with diverse viewpoints.",
      prompt: "Examine the argument presented above. Identify its assumptions, strengths, and potential weaknesses. Based on this analysis, provide a well-reasoned counterpoint that introduces a new perspective or challenges the original argument.",
      emoji: "🔄"
    },
    {
      name: "Analogize",
      shortName: "Analogize",
      description: "Draws a comparison to a similar situation or concept, helping to clarify and enhance understanding through familiar parallels.",
      prompt: "Identify the core components and underlying principles of the content above. Consider similar situations, concepts, or known stories that share these elements. Describe an analogy that clarifies the original content by drawing parallels to these familiar examples.",
      emoji: "🔗"
    },
    {
      name: "Elaborate with Details",
      shortName: "Elaborate",
      description: "Adds more detailed information or context to enhance understanding and depth of the current text.",
      prompt: "Identify the key points of the sentence or paragraph above. Consider what background information, examples, or explanations could provide additional depth. Elaborate on the content by incorporating these details in a logical and relevant manner.",
      emoji: "📝"
    },
    {
      name: "Infer or Predict",
      shortName: "Infer",
      description: "Makes inferences or predictions based on the information provided, adding speculative or forward-looking insights.",
      prompt: "Analyze the key facts and themes in the content above. Consider their implications and how they might interact or evolve over time. Based on this analysis, make a logical inference or prediction about future developments related to the topic.",
      emoji: "🔮"
    },
    {
      name: "Clarify Ambiguities",
      shortName: "Clarify",
      description: "Identifies and clarifies ambiguous terms or statements to ensure the text is clear and understandable.",
      prompt: "Review the content for ambiguous terms, phrases, or statements. Break down the content to understand the context and potential sources of confusion. Provide clarifications or additional context to resolve these ambiguities, ensuring clarity for a general audience.",
      emoji: "🤔"
    },
    {
      name: "Highlight Importance",
      shortName: "Highlight",
      description: "Emphasizes key points or critical aspects of the text, focusing attention on the most important elements.",
      prompt: "Review the content above to identify its most significant points or messages. Consider the implications and relevance of these points within the broader context. Highlight these key elements, providing a brief rationale for their importance.",
      emoji: "✨"
    },
    {
      name: "Generate a Title or Headline",
      shortName: "Title",
      description: "Creates a succinct and compelling title or headline that captures the essence of the text.",
      prompt: "Summarize the main message and emotional tone of the content above. Consider what makes the content unique or impactful. Use this analysis to craft a title or headline that captures the essence and engages the intended audience.",
      emoji: "📰"
    },
    {
      name: "Suggest Readings or References",
      shortName: "Suggest",
      description: "Recommends additional readings, sources, or references related to the content for deeper exploration or verification.",
      prompt: "Consider the topics, themes, and specific details mentioned in the content above. Identify related areas that could benefit from further exploration or evidence. Suggest readings, sources, or references that complement or deepen understanding of these areas.",
      emoji: "📚"
    },
    {
      name: "Visualize Information",
      shortName: "Visualize",
      description: "Suggests ways to represent the text's information visually, enhancing comprehension through graphs, charts, or diagrams.",
      prompt: "Identify the key data, relationships, or concepts within the content above. Consider which visual formats (graphs, charts, diagrams) could best represent this information. Describe how this visual representation could enhance understanding or engagement with the content.",
      emoji: "📊"
    },

  ];