from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    data = {
        "title": "This is my super awesome Flask Jest example",
        "description": """
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias animi consectetur cupiditate
        distinctio eligendi, est explicabo facere ipsam iusto magnam minus officia perferendis repellendus sequi sunt
        temporibus vel veniam.
        """,
        "nested": [
            {
                x: f"content from {x}"
            }
            for x in range(10)
        ]
    }

    return render_template(
        'home.jinja2',
        **data
    )


if __name__ == '__main__':
    app.run(debug=True)
