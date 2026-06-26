export default defineEventHandler(() => {
  return {
    frontend: [
      // Core & Languages
      { name: 'HTML5', icon: '/tech/frontend/html.svg' },
      { name: 'CSS3', icon: '/tech/frontend/css.svg' },
      { name: 'JavaScript', icon: '/tech/frontend/javascript.svg' },
      { name: 'TypeScript', icon: '/tech/frontend/typescript.svg' },

      // Styling (Preprocessors & Frameworks)
      { name: 'Sass', icon: '/tech/frontend/sass.svg' },
      { name: 'Less', icon: '/tech/frontend/less.svg' },
      { name: 'Tailwind CSS', icon: '/tech/frontend/tailwind.svg' },
      { name: 'Bootstrap', icon: '/tech/frontend/bootstrap.svg' },

      // Main Frameworks & Ecosystem
      { name: 'Vue 2-3', icon: '/tech/frontend/vue.svg' },
      { name: 'Nuxt 2-4', icon: '/tech/frontend/nuxt.svg' },
      { name: 'Pinia', icon: '/tech/frontend/pinia.svg' },
      { name: 'Vitest', icon: '/tech/frontend/vitest.svg' },

      // UI Components & Libraries
      { name: 'Nuxt UI', icon: '/tech/frontend/nuxt.svg' },
      { name: 'ShadCN', icon: '/tech/frontend/shad-cn.png' },
      { name: 'Prime Vue', icon: '/tech/frontend/prime-vue.png' },
      { name: 'Vuetify', icon: '/tech/frontend/vuetify.svg' }
    ],
    backend: [
      // Core Stack
      { name: 'PHP', icon: '/tech/backend/php.svg' },
      { name: 'Laravel', icon: '/tech/backend/laravel.svg' },

      // High-Performance PHP & Async
      { name: 'Swoole', icon: '/tech/backend/swoole.png' },

      // Laravel Ecosystem & Admin Panels
      { name: 'Inertia.js', icon: '/tech/backend/inertia-js.svg' },
      { name: 'Livewire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/livewire/livewire-original.svg' },
      { name: 'Filament', icon: '/tech/backend/filament.svg' },
      { name: 'Moonshine', icon: 'https://demo.moonshine-laravel.com/vendor/moonshine/logo-small.svg' },
      { name: 'Nova', icon: '/tech/backend/nova.svg' },

      // Testing
      { name: 'Pest', icon: '/tech/backend/pest.png' },

      // Primary Databases (Relational)
      { name: 'PostgresSQL', icon: '/tech/backend/postgresql.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

      // Message Brokers & WebSockets
      { name: 'Kafka', icon: '/tech/backend/kafka.svg' },
      { name: 'RabbitMQ', icon: '/tech/backend/rabbitmq.svg' },
      { name: 'Centrifugo', icon: '/tech/backend/centrifugo.png' },

      // API, NoSQL, Cache & Search
      { name: 'GraphQL', icon: '/tech/backend/graphql.svg' },
      { name: 'Redis', icon: '/tech/backend/redis.svg' },
      { name: 'KeyDB', icon: '/tech/backend/key-db.webp' },
      { name: 'Memcached', icon: '/tech/backend/memcached.svg' },
      { name: 'MongoDB', icon: '/tech/backend/mongodb.svg' },
      { name: 'Cassandra', icon: '/tech/backend/cassandra.svg' },
      { name: 'Elasticsearch', icon: '/tech/backend/elasticsearch.svg' },

      // File Storage & Analytics
      { name: 'MinIO', icon: '/tech/backend/minio.png' },
      { name: 'Cloudflare R2', icon: '/tech/backend/cloudflare.svg' },
      { name: 'ClickHouse', icon: '/tech/backend/clickhouse.svg' },

      // Media Processing
      { name: 'FFmpeg', icon: '/tech/backend/ffmpeg.svg' }
    ],
    tools: [
      // Infrastructure
      { name: 'Linux', icon: '/tech/tools/linux.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'GitHub Actions', icon: '/tech/tools/github-actions.svg' },

      // Monitoring & Observability
      { name: 'Prometheus', icon: '/tech/tools/prometheus.svg' },
      { name: 'Grafana', icon: '/tech/tools/grafana.svg' },

      // AI Tooling
      { name: 'Claude Code', icon: '/tech/tools/claude-code.svg' },

      // Payment Gateways
      { name: 'Stripe', icon: '/tech/tools/stripe.svg' },
      { name: 'PayPal', icon: '/tech/tools/paypal.svg' },
      { name: 'FreeKassa', icon: '/tech/tools/freekassa.png' },
      { name: 'Platega.io', icon: '/tech/tools/platega.svg' }
    ]
  }
})
