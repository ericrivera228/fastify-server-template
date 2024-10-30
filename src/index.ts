import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.get('/', async () => {
  return 'Hey, listen! 🧚';
})


// prod: port: 3000, host: '0.0.0.0'
const start = async () => {
  try {
    await fastify.listen({ port: 8080, host: 'localhost' });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();