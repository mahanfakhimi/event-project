import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import MarkerIcon from "../components/icons/MarkerIcon";
import API_KEY from "../config/mapApiKey";

const search = debounce((params, handleSearchResults) => {
  fetch(`https://map.ir/search/v2/`, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data["odata.count"] > 0) handleSearchResults(data.value);
      else handleSearchResults([{ notFound: true }]);
    });
}, 750);

const Search = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (text.length > 1) {
      const params = { text: text };
      search(params, setResults);
    } else if (text.length === 0) setResults([]);
  }, [text]);

  return (
    <div>
      <Header />
      <HeaderMobile />

      <div className="w-full px-8 flex flex-col items-center pt-14 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-6xl font-black mb-14"
        >
          جستجو در مکان های مختلف
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="w-full">
          <input
            type="text"
            id="search"
            autoComplete="off"
            placeholder="دنبال کجا میگردی"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="px-6 w-full py-4 rounded-full outline-none border-2 border-neutral-200 focus:border-yellow-300 transition-all"
          />
        </motion.div>

        <AnimatePresence>
          {results.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-y-8 mt-8 w-full">
              {results.map((item, index) =>
                item.notFound ? (
                  <p key={index}>نتیجه ای یافت نشد</p>
                ) : (
                  <Link
                    key={index}
                    target="_blank"
                    href="https://hotelyar.com/city/28/%D9%87%D8%AA%D9%84%D9%87%D8%A7%DB%8C-%D9%87%D9%85%D8%AF%D8%A7%D9%86"
                    rel="noreferrer"
                    to={`https://balad.ir/#15/${item.geom.coordinates[1]}/${item.geom.coordinates[0]}`}
                  >
                    <div className="flex items-center gap-x-8 cursor-pointer hover:opacity-25 transition-all">
                      <MarkerIcon className="w-5 h-5" />

                      <div>
                        <p>{item.title}</p>
                        <p>{item.address}</p>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Search;
