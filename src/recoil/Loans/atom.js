import { atom } from 'recoil';

// const dummyLoan = {
//     id: 123,
//     name: "Pablo's test",
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eum, alias id adipisci ex tempora debitis doloremque enim iste perferendis inventore, tenetur totam corrupti magnam aspernatur est earum unde. Totam. Optio adipisci ex accusamus sit nulla dolore et corrupti, ea repellat praesentium assumenda maiores qui dicta iusto sunt architecto minima cupiditate officiis eligendi maxime sequi vitae delectus vero magni. Minus? Culpa, voluptates dolorem! Quis fugit quas at iusto, ad sed perspiciatis asperiores explicabo consequuntur mollitia ut fugiat nostrum similique veniam enim architecto atque cumque. Fuga ab laudantium totam et voluptatum! Saepe mollitia quas, qui aperiam vero laborum animi ratione doloremque alias dolorum tempore ab pariatur nostrum consequuntur, quaerat magni voluptas fuga nemo? Quidem fugit nihil sed recusandae omnis beatae velit. Omnis est enim iure eum modi odit. Dolore inventore voluptatum perferendis voluptas nesciunt incidunt labore quod aliquam fugit repudiandae vero maxime magni, quis illum! Quis maxime velit voluptatem? Saepe, quaerat!',
//     loanAmount: 1000000,
//     image: {
//         url: 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg'
//     },
//     geocode: {
//         country: {
//             isoCode: 'UY',
//             name: "Uruguay"
//         }
//     }
// };

export const selectedLoanAtom = atom({
    key: 'selectedLoanAtom',
    default: null,
});
