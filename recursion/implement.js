let counter = 0

function count() {
    if (counter > 0) {
        return 'done!'
    }

    counter++
   return count()
}

console.log(count())