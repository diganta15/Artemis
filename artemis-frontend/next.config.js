module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com","media.rawg.io"],
  },
  env:{
    TEST_EMAIL:process.env.TEST_EMAIL,
TEST_NAME:process.env.TEST_NAME,
TEST_NICKNAME:process.env.TEST_NICKNAME,
TEST_PICTURE:process.env.TEST_PICTURE,
  }
}
