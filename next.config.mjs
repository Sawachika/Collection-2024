/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url'
import path from 'path'
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles')],
  },
}

export default nextConfig
