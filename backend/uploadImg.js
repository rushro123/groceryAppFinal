import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dpfspbjyk', 
    api_key: '216696981612692', 
    api_secret: 'bs6DCJ1XtQXvAL6En4BTfAdP9WM' 
});
const opts={
    overwrite:true,
    invalidate:true,
    resource_type:'auto'
}
