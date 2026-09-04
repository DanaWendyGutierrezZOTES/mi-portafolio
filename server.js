import { dev } from 'astro';

async function start() {
  console.log('Iniciando servidor Astro...');
  const server = await dev({
    root: '.',
    server: {
      port: 4321,
      host: true
    }
  });
  console.log(`Servidor Astro listo en http://localhost:4321`);
}

start().catch(err => {
  console.error('Error al iniciar el servidor Astro:', err);
  process.exit(1);
});
