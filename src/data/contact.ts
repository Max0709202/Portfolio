/**
 * Contact Data
 * Personal contact information and social media links
 */

export interface ContactData {
    email: string;
    phone: string;
    location: string;
    address?: string;
    social: {
        github: string;
        linkedin: string;
        whatsapp: string;
        mail: string;
        discord: string;
    };
}

export const contact: ContactData = {
    email: 'passionmax22@gmail.com',
    phone: '+54 3442 453797',
    location: 'Concepción del Uruguay, Entre Ríos, Argentina',
    address: 'Ruta 39 km 142, Lote 19, Concepcion del Uruguay, Entre Ríos, Argentina',
    social: {
        github: 'https://github.com/Max0709202',
        linkedin: 'https://www.linkedin.com/in/nishida3149559',
        whatsapp: 'https://wa.me/8107024786494',
        mail: 'mailto:passionmax22@gmail.com',
        discord: 'ID : noriaki0206'
    }
};
