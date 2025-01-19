import os
import streamlit as st
from openai import OpenAI
from dotenv import load_dotenv

# Keywords to determine topics
TOPIC_KEYWORDS = {
    "Saving": ["saving", "save money", "emergency fund", "cutting costs"],
    "Budgeting": ["budgeting", "budget", "spending", "tracking expenses"],
    "Investing": ["investing", "stocks", "index funds", "retirement funds", "investments"],
    "Retirement": ["retirement", "retire", "pension", "401k", "retirement planning"],
    "Cybersecurity": ["hacked", "hacking", "cyber threats", "cybersecurity"]
}

# Determine topic based on user input
def determine_topic(user_input):
    user_input = user_input.lower()
    for topic, keywords in TOPIC_KEYWORDS.items():
        if any(keyword in user_input for keyword in keywords):
            return topic
    return None

# Load environment variables
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    st.error("OpenAI API key is missing. Please set it in the .env file.")
    st.stop()

# Set title
st.markdown('<div class="title">🤖 Chat with LensBot</div>', unsafe_allow_html=True)

# Initialize session state
if "answers" not in st.session_state:
    st.session_state["answers"] = []
if "area" not in st.session_state:
    st.session_state["area"] = None
if "question_index" not in st.session_state:
    st.session_state["question_index"] = 0
if "messages" not in st.session_state:
    st.session_state["messages"] = [
        {
            "role": "assistant",
            "content": "Welcome to LolLens, your Fun Financial Assistant! How can I help you today?"
        }
    ]
if "memes" not in st.session_state:
    st.session_state["memes"] = []

meme_images = [
    "image.jpg"
]

# Function to display messages with proper formatting
def display_message(role, content):
    # Replace newlines with HTML <br> for line breaks
    formatted_content = content.replace("\n", "<br>")
    st.chat_message(role).markdown(formatted_content, unsafe_allow_html=True)

# Predefined follow-up questions
follow_up_questions = {
    "Saving": [
        "1) Do you shop around when buying things?\nA) Yes, I love shopping!\nB) Sometimes\nC) No, I don't like shopping",
        "2) You check the change in your pocket and find lots of $5 bills. Do you:\nA) Spend it the next chance you get\nB) Save it for later\nC) Throw them away",
        "3) Do you ask friends or family for loans of money?\nA) Only in emergencies\nB) Always\nC) Once a month\nD) Never"
    ],
    "Budgeting": [
        "1) What is a budget to you?\nA) Having money left over at the end of the month\nB) Having enough money to go out to eat\nC) A plan made in advance regarding the expenditure of money based on available income",
        "2) Which one of these are fixed expenses?\nA) Food and groceries\nB) Mortgages/Rent payments\nC) Charitable contributions",
        "3) What are the best tools for budgeting?\nA) Pencil and Paper\nB) Computer Spreadsheets\nC) Financial Management Software\nD) All of the above"
    ],
    "Investing": [
        "1) If you buy a company's stock:\nA) You own part of the company\nB) You have lent the company money\nC) You are liable for the company's debt",
        "2) In general, investments that are riskier tend to provide higher returns over time than investments with less risk.\nA) True\nB) False\nC) Don't know",
        "3) What is your main goal for investing?\nA) Wealth growth\nB) Retirement\nC) Passive income"
    ],
    "Retirement": [
        "1) When do you plan on retiring?\nA) Before 60\nB) Between 60 to 65\nC) After 65",
        "2) Which is true about retirement planning?\nA) I should update my plan periodically\nB) Saving a little bit won't help\nC) My employer's health insurance plan will cover all my expenses",
        "3) How many years do you expect to spend in retirement?\nA) 1 to 5 years\nB) 6 to 10 years\nC) 12 to 16 years\nD) 16 to 20 years"
    ],
    "Cybersecurity": [
        "1) What does cybersecurity protect?\n A) Cyber security protects criminals\n B) Cyber security protects internet-connected systems\n C) Cyber security protects hackers",
        "2) Which of the following is a type of cyber security?\n A) Cloud Security\n B) Network Security\n C) Application Security",
        "3) What are the features of cyber security? A) Compliance\n B) Defense against internal threats\n C) Threat Prevention D) All of the above"
    ]
}

# Display chat messages
for msg in st.session_state["messages"]:
    display_message(msg["role"], msg["content"])

if prompt := st.chat_input():
    st.session_state["messages"].append({"role": "user", "content": prompt})
    display_message("user", prompt)

    if not st.session_state["area"]:
        # Determine topic
        topic = determine_topic(prompt)
        if topic:
            st.session_state["area"] = topic
            st.session_state["question_index"] = 0
            first_question = follow_up_questions[topic][0]
            st.session_state["messages"].append({"role": "assistant", "content": first_question})
            display_message("assistant", first_question)
        else:
            error_message = "I didn't quite understand that. Can you rephrase or be more specific?"
            st.session_state["messages"].append({"role": "assistant", "content": error_message})
            display_message("assistant", error_message)
    else:
        # Process answers and generate memes
        topic = st.session_state["area"]
        question_index = st.session_state["question_index"]
        if question_index < len(follow_up_questions[topic]):
            st.session_state["answers"].append(prompt)
            st.session_state["question_index"] += 1
            if st.session_state["question_index"] < len(follow_up_questions[topic]):
                next_question = follow_up_questions[topic][st.session_state["question_index"]]
                st.session_state["messages"].append({"role": "assistant", "content": next_question})
                display_message("assistant", next_question)
            else:
                # Display tips and memes
                st.write("### Your Financial Tips & Memes!")
                
                client = OpenAI(
                    api_key= openai_api_key,
                )

                user_answers = "\n".join(st.session_state["answers"])
                prompt_for_gpt = f"Based on the following answers, generate 25 financial tips with funny and educational very short meme-captions.:\n{user_answers}"

                def chat_gpt(prompt):
                    response = client.chat.completions.create(
                        model="gpt-3.5-turbo",
                        messages=[{"role": "user", "content": prompt}]
                    )
                    captions = response.choices[0].message.content.strip().split("\n")
                    return captions

                financial_tips = chat_gpt(prompt_for_gpt)

                st.write("### Financial Tips")
                st.write(financial_tips)
                st.session_state["memes"] = [{"image": img, "caption": cap} for img, cap in zip(meme_images, financial_tips)]
