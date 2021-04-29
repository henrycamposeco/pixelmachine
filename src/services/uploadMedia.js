import {renderVideo} from './renderVideo';

const uploadMedia = (files, context) => {
    const reader = new FileReader();
    const mediaType = getFileType(files, context);
    context.setKeyframes([]);

    reader.onload = async function (event) {
        if (mediaType === 'video') {
            await renderVideo(event.target.result, context);
        }
    };
    reader.readAsDataURL(files[0]);
    context.setIsLoading(false);
}

const getFileType = (files, context) => {
    const mediaType = files[0].type.split('/')[0];
    context.setMediaType(mediaType);
    return mediaType;
}

export default uploadMedia;

