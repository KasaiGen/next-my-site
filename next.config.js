/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return config
    },
    typescript:{
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
