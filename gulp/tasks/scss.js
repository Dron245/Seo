import * as dartSass from 'sass';
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, {
                sourcemaps: true
            })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: 'SCSS',
                        message: 'Error: <%= error.message %>'
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
            // .pipe(sass({ outputStyle: 'compressed'}))
            .pipe(sass({ outputStyle: 'expanded'}))
            .pipe(
					    autoPrefixer({
						        grid: true,
						        overrideBrowserslist: ['last 3 version'],
						        cascade: true
						    })
						)
						//создает не сжатый файл
						// .pipe(groupCssMediaQueries())
						.pipe(app.gulp.dest(app.path.build.css))
						.pipe(cleanCss())
						.pipe(
                rename({
                    extname: '.min.css'
                })
            )
				.pipe(app.gulp.dest(app.path.build.css, {sourcemaps: '.' }))
            .pipe(app.plugins.browserSync.stream())
    )
}
