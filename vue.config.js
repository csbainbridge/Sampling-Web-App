module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "~@/assets/scss/_globals.scss";
                    @import "~@/assets/scss/_rb-planning-systems.scss";`
            }
        }
    }
}