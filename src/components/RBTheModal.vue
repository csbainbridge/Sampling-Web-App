<template>
    <section class="rb-modal">
        <header class="rb-modal__header">
            <div class="rb-modal__icon-wrapper">
                <label for="close-modal" class="rb-modal__notes-label rb-modal-close-label">CLOSE</label>
                <b-icon id="close-modal" class="rb-modal__icon" icon="x" />
            </div>
            <div class="rb-modal__header-wrapper">
                <font-awesome-icon
                    class="rb-modal__header-icon mr-4 mb-3"
                    :icon="['fas', 'pencil-alt']"
                    fixed-width>
                </font-awesome-icon>
                <div class="rb-modal__header-texts-wrapper">
                    <h2 class="rb-modal__header-text">EM00516/SAMP</h2>
                    <p class="rb-modal__header-description">ARLAMOL HD-LQ-(RB)</p>
                </div>
            </div>
        </header>
        <section class="rb-modal__notes-wrapper">
            <label for="rb-modal__product-notes" class="rb-modal__notes-label my-3">Notes:</label>
            <textarea
                name="rb-modal__product-notes"
                id="rb-modal-product-notes"
                class="rb-modal__notes-input"
                v-model="notes">
            </textarea>
            <label for="rb-modal-hide-until" class="rb-modal__notes-label my-3">Show these notes on:</label>
            <input
                type="date"
                id="rb-modal-hide-until"
                class="rb-modal__product-notes-hide-until"
                v-model="date" />
        </section>
        <section class="rb-modal__actions-wrapper">
            <!-- TODO: Add secondary and primary buttons here -->
            <RBBaseSecondaryButton
                id="cancel-update-notes-btn"
                name="cancel">
            </RBBaseSecondaryButton>
            <RBBasePrimaryButton
                id="update-notes-btn"
                name="update">
            </RBBasePrimaryButton>
        </section>
    </section>
</template>

<script>
import { RBBasePrimaryButton, RBBaseSecondaryButton } from '@/components'
export default {
    components: {
        RBBasePrimaryButton,
        RBBaseSecondaryButton
    },
    data () {
        return {
            materialSku: 'EM00516/SAMP',
            materialDescription: 'ARLAMOL HD-LQ-(RB)',
            notes: 'Requested 10KG from RBA - 24.06.2020 Curtis Bainbridge',
            date: '2020-06-28'
        }
    }
}
</script>

<style lang="scss">
    .rb-modal {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        overflow: auto;
        width: 24rem;
        height: 100%;
        z-index: 3;
        position: absolute;
        right: 0;
        top: 0;
        background-color: $rb-dashboard-navigation-colour;
        transition: transform ease-in .2s;
        &__icon-wrapper {
            display: flex;
            flex-direction: row;
            margin: .5rem .5rem;
            justify-content: flex-end;
        }
        &__close-label {
            margin-bottom: 0 !important;
        }
        &__icon {
            margin-left: .2rem;
            font-size: 1.6rem;
            cursor: pointer;
            right: 0;
        }
        & > header,
        &__notes-wrapper {
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
            letter-spacing: .1rem;
        }
        &__actions-wrapper {
            display: flex;
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
        }
        &__actions-wrapper > .rb-secondary-btn {
            margin-right: 1rem;
        }
        &__header {
            background-color: $rb-dashboard-navigation-colour;
            &-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            &-icon {
                font-size: 1.6rem;
            }
        }
        &__notes-input {
            background: transparent;
            border: 2px solid $rb-primary-text-colour-dark-1;
            border-radius: .2rem;
            height: 10rem;
            width: 100%;
            outline: none;
            padding: 1.35rem 1rem;
            color: $rb-primary-text-colour-dark-1;
            letter-spacing: .1rem;
        }
        &__notes-label {
            color: $rb-primary-text-colour-dark-1;
            letter-spacing: .1rem;
        }
        &__product-notes-hide-until {
            width: 100%;
            background: #1E1E1E;
            border: 2px solid $rb-primary-text-colour-dark-1;
            border-radius: .25rem;
            padding: 1rem;
            color: $rb-primary-text-colour-dark-1;
        }
    }
</style>
