import { Link } from "react-router-dom";
import { VideosContext } from "../context/VideosProvider";
import { useContext } from "react";

export default function Videos() {
  const { videos } = useContext(VideosContext);
  console.log(videos);
  return (
    <div className="pt-20">
      <h1>Outros videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="cursor-pointer">
            <Link to={video.id}>
              <h2>{video.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
