from flask import Flask, request, jsonify

app = Flask(__name__)

# Data storage (for demonstration, we'll use an in-memory list)
chat_history = []

@app.route('/send_question', methods=['POST'])
def send_question():
    data = request.get_json()
    filename = data.get('filename')
    question = data.get('question')
    
    # Process the question and return a simple response with metadata
    response_data = {
        'id': len(chat_history) + 1,
        'filename': filename,
        'question': question,
        'answer': 'This is a placeholder answer.',
        'metadata': 'Some metadata for the answer.'
    }
    
    chat_history.append(response_data)
    
    return jsonify(response_data)

@app.route('/get_history', methods=['GET'])
def get_history():
    return jsonify(chat_history)

if __name__ == '__main__':
    app.run(debug=True)
