module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", process.env.JWT_SECRET || '0230289a-7348-4373-913f-85e15a41de47'),
    },
  },
});
