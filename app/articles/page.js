import Link from "next/link"
import PostsPage from "../posts/page"


export default function ArticlesPage(){
    return(
        <div>
            <h1>Article Page</h1>

            <Link href="/posts">
                <button>Take me to the posts page</button>
            </Link>
        </div>
    )
}