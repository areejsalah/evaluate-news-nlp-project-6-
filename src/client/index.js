import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { checkForUrl} from './js/urlChecker'
import { subjectScore } from './js/formHandler'
import { articlePolarity } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//console.log(checkForName);

export {
    checkForName,
    handleSubmit,
    checkForUrl,
    subjectScore,
    articlePolarity
}