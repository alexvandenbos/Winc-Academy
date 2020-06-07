import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App

handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        console.log(prevState.todos)
        console.log(updatedTodos)
        return {
            todos: updatedTodos
        }
    })
}

// 5. `List` rendert een `<ul>` met `<li>`'s (vul wat leuke boodschappen in die je normaal koopt)
// 6. **Exporteer** je component. 
// 7. **Importeer** je nieuwe component in `App.js`.
// 8. Render je `List` in je `App.js` door middel van een **import statement** en **JSX** 👉 `<List/>`
