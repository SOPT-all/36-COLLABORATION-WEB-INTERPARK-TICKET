import ImageSkeleton from "./ImageSkeleton";

interface ImageSkeletonListProps {
    count: number;
}

const ImageSkeletonList = ({count}: ImageSkeletonListProps) => {
    return (
        <>
            {new Array(count).fill(0).map((_, idx) => (
                <ImageSkeleton key={idx} />
            ))}
        </>
    );
};

export default ImageSkeletonList;