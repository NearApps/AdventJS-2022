function getFilesToBackup(lastBackup, changes) {
    return changes
        .reduce(
            (ids, backups) => (
                backups[1] > lastBackup &&
                !ids.includes(backups[0]) &&
                ids.push(backups[0]),
                    ids
            ),
            []
        )
        .sort((x, y) => x - y);
}

function getFilesToBackup(lastBackup, changes) {
    return [...new Set(changes
        .filter(([, change]) => change > lastBackup)
        .map(([id,]) => id)
        .sort((a, b) => a - b))];
}