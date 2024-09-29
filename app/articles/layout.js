export const metadata = {
    title:"articles page"
}

export default function ({children}){
    return(
        <div>
            <h>Articles</h>
            <div
             style={{
                marginTop: "50px",
                background: "blue",
                padding: "20px",
                borderRadius:"10px"
                }}>
                {children}
            </div>
        </div>
    )
}