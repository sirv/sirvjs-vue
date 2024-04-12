interface SMVSlide {
    src?: string | undefined
    type?: string
    dataOptions?: object
    id?: string | undefined
    dataPinned?: string
    dataThumbnailImage?: string
    dataThumbnailHtml?: string
    dataDisabled?: string | null
    dataSwipeDisabled?: string | null
    dataHiddenSelector?: string | null
    staticImage?: string | boolean | null
}

export default SMVSlide;
