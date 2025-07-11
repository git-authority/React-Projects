import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
export const GitHub = () => {

    const data = useLoaderData();

    return (
        <div className="flex items-center justify-center">
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl w-[400px]'>
                GitHub Followers: {data.followers}
                <div className="flex items-center justify-center mt-4">
                    <img src={data.avatar_url} alt="GitHub DP" height={300} width={200} />
                </div>
            </div>
        </div>
    )
}


export const GitHubInfoLoader = async () => {
    const response = await axios.get("https://api.github.com/users/git-authority")
    return response.data;
}