function getOptimalPath(path) {
    return path.reduceRight((previous, current) => {
        return current.map(
            (value, index) => value + Math.min(previous[index], previous[index + 1])
        );
    })[0];
}

