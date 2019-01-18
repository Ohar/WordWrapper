import chai from 'chai'
import isConsonantWithNextVowel from '@/wordbreaker-russian/rules/118.0-is-consonant-with-next-vowel'

describe(
    'isConsonantWithNextVowel',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(isConsonantWithNextVowel)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        input: 'курьер',
                        expectedOutput: [
                            true,   // к
                            false,  // у
                            false,  // р
                            false,  // ь
                            false,  // е
                            false,  // р
                        ],
                    },
                    {
                        input: 'объявление',
                        expectedOutput: [
                            false,  // о
                            false,  // б
                            false,  // ъ
                            false,  // я
                            false,  // в
                            true,   // л
                            false,  // е
                            true,   // н
                            false,  // и
                            false,  // е
                        ],
                    },
                    {
                        input: 'подъязычный',
                        expectedOutput: [
                            true,   // п
                            false,  // о
                            false,  // д
                            false,  // ъ
                            false,  // я
                            true,   // з
                            false,  // ы
                            false,  // ч
                            true,   // н
                            false,  // ы
                            false,  // й
                        ],
                    },
                    {
                        input: 'сласть',
                        expectedOutput: [
                            false,  // с
                            true,   // л
                            false,  // а
                            false,  // с
                            false,  // т
                            false,  // ь
                        ],
                    },
                ]

                testCaseArr.forEach(
                    ({input, expectedOutput}) => {
                        it(
                            input,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            isConsonantWithNextVowel(
                                                i,
                                                input
                                            ),
                                            result
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)
