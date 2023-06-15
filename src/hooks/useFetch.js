import { reactive } from '@vue/reactivity';

const useFetch = () => {

    const formState = reactive({
        url: '',
        error: false,
        isLoading: false
    })

    const listOfShortUrl = reactive([])


    const handleClickShort = async () => {
        formState.isLoading = true;
        if (formState.url) {
            const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${formState.url}`)
            if (result.ok) {
                const data = await result.json()
                const { full_short_link2, original_link, short_link2 } = data.result

                listOfShortUrl.push({
                    original_link,
                    full_short_link: full_short_link2,
                    short_link: short_link2
                })

                formState.url = '';
                formState.error = false
            } else {
                formState.error = true
            }
        } else {
            formState.error = true
        }
        formState.isLoading = false;
    };


    return {
        formState,
        listOfShortUrl,

        handleClickShort
    }
}

export default useFetch