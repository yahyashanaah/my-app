import Todo from "../components/todo";

export default async function PostsPage(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await response.json();
    return(
        <div>
            <h1>Posts Page</h1>
            <h2>{todo.title}</h2>

            <div>
                <Todo></Todo>
            </div>
        </div>
    )
}