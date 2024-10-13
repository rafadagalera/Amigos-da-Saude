import { Link } from "react-router-dom";
import { VideosContext } from "../context/VideosProvider";
import { useContext, useState } from "react";

export default function Videos() {
  const { videos } = useContext(VideosContext);

  const [filteredVideos, setFilteredVideos] = useState(videos);

  const searchVideos = () => {
    const search = event.target.value.toLowerCase();
    setFilteredVideos(
      videos.filter((video) => video.name.toLowerCase().includes(search)),
    );
  };

  return (
    <div className="container mx-auto flex pt-20">
      <div className="flex flex-col items-center rounded-xl justify-center gap-5 border px-4 py-3">
        <input
          type="text"
          onChange={() => searchVideos()}
          className="rounded-md border"
        />

        <ul className="flex flex-col items-center justify-center gap-5">
          {filteredVideos.map((video) => (
            <li key={video.id} className="cursor-pointer border">
              <Link to={video.id} className="">
                <h2>{video.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex w-screen items-center justify-center gap-5">
        {videos.map((video) => (
          <li key={video.id} className="cursor-pointer border">
            <Link to={video.id} className="">
              <h2>{video.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
