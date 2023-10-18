import json
from flask import Flask
from flask import url_for
from flask import request
from markupsafe import escape
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

bedrock_client = None
pinecode_conn = None

@app.route("/", methods=['GET'])
def hello_world():
    return "<p> Hello, World </p>"

@app. route("/list-docs", methods=['GET'])
def list_docs():
    return [
    {"docId": 22, "docName": "ABC Brokerage (K-8 Filing)"},
    {"docId": 23, "docName": "DEF Brokerage (K-8 Filing)"},
    {"docId": 24, "docName": "GEH Brokerage (K-8 Filing)"},
    {"docId": 25, "docName": "IJK Brokerage (K-8 Filing)"}]

@app. route("/qa", methods=['GET'])
def answer_question():
    document = escape(request.args.get('doc'))
    question = escape(request.args.get("q"))
    print(f"question: fquestion)")
    print(f"document: fdocument)")
    return  __infer(document, question)
    # return {
    #     "docId": docId,
    #     "question": question,
    #     "answer": answer
    # }

def __infer(context, question)->str:
    """this function "asks" the questions. It invokes the Bedrock model
    (answer, context) = bedrock_infer(...)
    return (
    "answer": answer,
    "context"; context """
    #return "The answer is 42!"
    with open("sample-response.json") as f:
        return json.load(f)
    
def __bootstrap():
    """Bootstraps the service with connections to Amazon Bedrock service
    and the pinecone vector DB,
    bedrock_client-
    pinecode_conn =,o.,
    TODO; setup the connection to to pinecome;lki """