import { motion } from "framer-motion";
import { POST } from "../constants";
import BackgroundGradient from "./BackgroundGradient"; 

const Post = () => {
  return (
    <motion.div
      id="post"
      className="py-16 lg:section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="container mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 font-bold text-center text-4xl text-white"
        >
          Latest Posts
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POST.map((post, index) => (
            <div
              key={index}
              className="relative bg-black text-white rounded-2xl shadow-[0_0_10px_#4B0082] hover:shadow-[0_0_15px_#4B0082] transition-all duration-300 p-5 border border-transparent glowing-border w-full max-w-sm mx-auto"
            >
              <BackgroundGradient containerClassName="rounded-2xl p-5">
                <div className="max-h-96 overflow-y-auto flex flex-col space-y-4  ">
                  <div className="flex-shrink-0">
                    <img src={post.image} alt={post.title} />
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm my-2">{post.description}</p>
                    {post.hashtags && post.hashtags.length > 0 && (
                      <div className="mt-2 text-sm text-gray-400">
                        {post.hashtags.map((hashtag, idx) => (
                          <span key={idx} className="mr-2">
                            #{hashtag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4">
                      {post.follow && (
                        <div className="flex flex-wrap items-center space-x-2">
                          {post.follow.linkedin && (
                            <a
                              href={post.follow.linkedin}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              LinkedIn
                            </a>
                          )}

                          {post.follow.linkedin && post.follow.twitter && <span>|</span>}

                          {post.follow.twitter && (
                            <a
                              href={post.follow.twitter}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              X-Link
                            </a>
                          )}

                          {post.follow.twitter && post.follow.Cohort && <span>|</span>}

                          {post.follow.Cohort && (
                            <a
                              href={post.follow.Cohort}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              Cohort Link
                            </a>
                          )}

                          {post.follow.course && !post.follow.linkdln && !post.follow.x && (
                            <a
                              href={post.follow.course}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              Course Link
                            </a>
                          )}

                          {post.follow.linkdln && (
                            <a
                              href={post.follow.linkdln}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              LinkedIn
                            </a>
                          )}

                          {post.follow.x && (
                            <a
                              href={post.follow.x}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              X-Link
                            </a>
                          )}
                          {post.follow.course && (
                            <a
                              href={post.follow.course}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              Course Link
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Post;




























