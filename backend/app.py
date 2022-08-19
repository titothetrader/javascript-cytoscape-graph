import json
from flask import Flask, render_template_string, request
app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save():
    graph = request.get_json(force=True)
    print(graph)

    f = open('example.json', "w")
    json.dump(graph,f)
    f.close()
    return 'saved'
