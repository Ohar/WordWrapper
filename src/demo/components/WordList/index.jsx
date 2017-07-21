import React from 'react';
import Word from './../Word';

export default function WordList ({words, width}) {
    return (
        <p className="WordList">
            {
                words.map(
                    (word, i) => (
                        <Word key={i}
                              width={width}>
                            {word}
                        </Word>
                    )
                )
            }
        </p>
    )
}
