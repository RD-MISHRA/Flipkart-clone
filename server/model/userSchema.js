import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true
    }
});

const user = mongoose.model('user', userSchema);

export default user;

// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 5,
//         maxlength: 20
//     },
//     lastname: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 5,
//         maxlength: 20
//     },
//     username: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         index: true,
//         lowercase: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         lowercase: true,
//         validate: {
//             validator: function(v) {
//                 return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
//             },
//             message: props => `${props.value} is not a valid email address!`
//         }
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(v) {
//                 return /^\d{10}$/.test(v) && !v.startsWith('0');
//             },
//             message: props => `${props.value} is not a valid phone number!`
//         }
//     }
// });

// const user = mongoose.model('user', userSchema);

// export default user;
