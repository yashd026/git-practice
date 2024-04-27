import React, { useCallback } from 'react'

function test2() {
    const run = useCallback(() => {
        console.log('test2');
    })
    return (
        <div>test2</div>
    )
}

export default test2