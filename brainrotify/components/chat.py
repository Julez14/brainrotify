import os
import streamlit as st
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
openai_api_key = "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"
if not openai_api_key:
    st.error("OpenAI API key is missing. Please set it in the .env file.")
    st.stop()

st.title("🪙 LolLens")

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
            "content": "Welcome to LolLens! I will ask you a few simple questions about finance to check your proficiency.<br>"
                       "1. What area of finance are you seeking help with today?<br>"
                       "A) Saving Money<br>"
                       "B) Budgeting<br>"
                       "C) Investing<br>"
                       "D) Retirement Planning"
        }
    ]

# Function to display messages with proper formatting
def display_message(role, content):
    formatted_content = content.replace("\n", "<br>")
    st.chat_message(role).markdown(formatted_content, unsafe_allow_html=True)

# Predefined follow-up questions
follow_up_questions = {
    "A": [
        "A1) Do you shop around when buying things?<br>A) Yes, I love shopping!<br>B) Sometimes<br>C) No, I don't like shopping",
        "A2) You check the change in your pocket and find lots of $5 bills. Do you:<br>A) Spend it the next chance you get<br>B) Save it for later<br>C) Throw them away",
        "A3) Do you ask friends or family for loans of money?<br>A) Only in emergencies<br>B) Always<br>C) Once a month<br>D) Never"
    ],
    "B": [
        "B1) What is a budget to you?<br>A) Having money left over at the end of the month<br>B) Having enough money to go out to eat<br>C) A plan made in advance regarding the expenditure of money based on available income",
        "B2) Which one of these are fixed expenses?<br>A) Food and groceries<br>B) Mortgages/Rent payments<br>C) Charitable contributions",
        "B3) What are the best tools for budgeting?<br>A) Pencil and Paper<br>B) Computer Spreadsheets<br>C) Financial Management Software<br>D) All of the above"
    ],
    "C": [
        "C1) If you buy a company's stock:<br>A) You own part of the company<br>B) You have lent the company money<br>C) You are liable for the company's debt",
        "C2) In general, investments that are riskier tend to provide higher returns over time than investments with less risk.<br>A) True<br>B) False<br>C) Don't know",
        "C3) What is your main goal for investing?<br>A) Wealth growth<br>B) Retirement<br>C) Passive income"
    ],
    "D": [
        "D1) When do you plan on retiring?<br>A) Before 60<br>B) Between 60 to 65<br>C) After 65",
        "D2) Which is true about retirement planning?<br>A) I should update my plan periodically<br>B) Saving a little bit won't help<br>C) My employer's health insurance plan will cover all my expenses",
        "D3) How many years do you expect to spend in retirement?<br>A) 1 to 5 years<br>B) 6 to 10 years<br>C) 12 to 16 years<br>D) 16 to 20 years"
    ]
}

# Display chat messages
for msg in st.session_state["messages"]:
    display_message(msg["role"], msg["content"])

# Handle user input
if prompt := st.chat_input():
    # Save user input to answers for follow-up questions
    if st.session_state["area"] and st.session_state["question_index"] < len(follow_up_questions[st.session_state["area"]]):
        st.session_state["answers"].append(prompt)

    # If no area is selected yet, interpret the user's choice
    if not st.session_state["area"]:
        if prompt.upper() in follow_up_questions.keys():
            st.session_state["area"] = prompt.upper()
            st.session_state["question_index"] = 0

            # Start follow-up questions
            first_question = follow_up_questions[prompt.upper()][0]
            st.session_state["messages"].append({"role": "assistant", "content": first_question})
            display_message("assistant", first_question)
        else:
            # Handle invalid input
            invalid_message = "Please select a valid option (A, B, C, D)."
            st.session_state["messages"].append({"role": "assistant", "content": invalid_message})
            display_message("assistant", invalid_message)
    else:
        # Handle follow-up questions
        area = st.session_state["area"]
        question_index = st.session_state["question_index"]

        if question_index < len(follow_up_questions[area]):
            # Store the user's answer
            st.session_state["question_index"] += 1

            # Ask the next question or summarize if all questions are answered
            if st.session_state["question_index"] < len(follow_up_questions[area]):
                next_question = follow_up_questions[area][st.session_state["question_index"]]
                st.session_state["messages"].append({"role": "assistant", "content": next_question})
                display_message("assistant", next_question)
            else:
                # All questions are answered
                summary_message = "Thank you for answering the questions! Here's a summary of your responses and tips based on your answers."
                st.session_state["messages"].append({"role": "assistant", "content": summary_message})
                display_message("assistant", summary_message)

                st.write("### Your Answers:")
                area_questions = follow_up_questions[st.session_state["area"]]
                for i, answer in enumerate(st.session_state["answers"]):
                    st.write(f"**Q{i + 1}:** {area_questions[i].replace('<br>', ' ')}")
                    st.write(f"**Your Answer:** {answer}")

# Only display the "Get Tips" button if all questions have been answered
if (
    st.session_state["area"]  # Ensure the area is selected
    and st.session_state["question_index"] == len(follow_up_questions[st.session_state["area"]])
):
    if st.button("Get Tips"):
        st.experimental_set_query_params(page="generate_memes")
